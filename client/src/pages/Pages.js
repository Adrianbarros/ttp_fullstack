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
    NavLink,
    Redirect
} from 'react-router-dom';



export class Pages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            isAuth: false,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            }

        }
    }


    render() {

        const { newUser } = this.state;
        console.log(newUser)
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/Register" component={Register} />
                    <Route exact path="/stock_page" component={StockPage} />
                    <Route exact path="/records" component={Records} />
                </Switch>
            </Router>
        )
    }
}

export default Pages