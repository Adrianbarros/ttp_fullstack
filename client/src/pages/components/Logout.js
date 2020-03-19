import React, { Component, Fragment } from 'react'
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import Proptypes from 'prop-types';


export class Logout extends Component {
    static propTypes = {
        logout: Proptypes.func.isRequired
    }
    render() {
        return (
            <NavLink onClick={this.props.logout} href="#">
                Logout
            </NavLink>
        )
    }
}

export default connect(
    null,
    { Logout }
)(logout); 
