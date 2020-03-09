import React, { Component } from 'react';
import SignIn from './SignIn';
import Register from './Register';
import StockPage from './StockPage';
import Records from './Records';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';


export class Pages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            }

        }
    }
    handleSubmit = e => {
        e.preventDefault();
    }



    render() {

        const { newUser } = this.state;
        console.log(newUser)
        return (
            <Router>
                <switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/Register" component={Register} />
                    <Route excat path="/stock_page" component={StockPage} />
                    <Route excat path="/records" component={Records} />
                </switch>
            </Router>
        )
    }
}

export default Pages