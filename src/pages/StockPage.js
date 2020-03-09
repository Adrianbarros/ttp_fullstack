import React, { Component } from 'react'

//importing UI libraries
import { Form } from 'react-bootstrap';
import { NavLink, Router } from "react-router-dom";
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'react-uuid';//temporary

//importing redux
import { connect } from 'react-redux';
import { addStocks } from '../actions/itemActions';


//components
import StockList from './components/StockList'



export class StockPage extends Component {
    state = {
        total_amount: 5000,
        ticker: '',
        qty: 1,
    }
    getStock = () => {
        this.props.getStock();
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.getStock(e);
        const newStock = {
            name: this.state.ticker
        }
        this.props.addStocks(newStock);
    };


    render() {
        return (
            <Grid container spacing={0} >
                <Grid item xs={6}>
                    <div>
                        <Container component="main" maxWidth="xs">
                            <Typography component="h1" variant="h7">
                                Portafolio
                    </Typography>
                            <h1>${this.state.total_amount}</h1>
                            <StockList />
                        </Container>

                    </div>
                </Grid>
                <div>
                    <Grid item xs={12}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Typography component="h1" variant="h7">
                                Stocks
                </Typography>
                            <Form onSubmit={this.onSubmit} >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} >
                                        <TextField
                                            name="ticker"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="ticker"
                                            label="Stock Ticker"
                                            autoFocus
                                            onChange={this.onChange}
                                        />
                                    </Grid>

                                    <Grid item xs={12} >
                                        <TextField
                                            name="qty"
                                            variant="outlined"
                                            //required
                                            fullWidth
                                            id="qty"
                                            label="Qty"
                                            autoFocus
                                        />
                                    </Grid>
                                </Grid>
                                <button
                                > Buy </button>
                            </Form>
                        </Container>
                    </Grid>
                </div>
            </Grid>
        )
    }
}
const mapStateToProps = state => ({
    stock: state.stock
});

export default connect(mapStateToProps, { addStocks })(StockPage);
