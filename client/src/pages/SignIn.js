import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import {
    Alert,
    Container, Col, Form,
    FormGroup, Label, Input,
} from 'reactstrap';
import { NavLink, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { login } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';
import { PrivateRouter } from './Pages';




export class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
        msg: null
    };
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };
    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        const { history } = this.props;
        if (error !== prevProps.error) {
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg });
            }
            else {
                this.setState({ msg: null });
            }
        }
        if (isAuthenticated) {
            history.push('/stock_page')
        }

    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();

        const { email, password } = this.state;
        const user = {
            email,
            password
        }
        //attempt to login
        this.props.login(user);

    };
    toggle = () => {
        this.props.clearErrors();
    }


    render() {
        return (
            <Container className="App" className="themed-container" fluid="sm" >
                <h2>Log In</h2>
                <Col sm="12" sm={{ size: '6', offset: 3 }}>
                    <Avatar  ></Avatar>

                </Col>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
                </Col>
                <Form className="form" onSubmit={this.onSubmit}>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>

                        <FormGroup>
                            <Label for='email'></Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="email"
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for='password'></Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="password"
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Sign in
              </Button>
                    </Col>
                </Form>
                <NavLink to="/"> Already have an account? Sign in </NavLink>
            </Container>


        );
    }
}
const mapStatetoProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error

});

export default connect(
    mapStatetoProps,
    { login, clearErrors }
)(SignIn);