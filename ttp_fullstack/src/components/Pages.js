import React, { Component } from 'react'
import SignIn from './SignIn'
import Register from './Register'
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
            newUser: true,
        }
    }

    handleClick() {
        this.state = {
            newUser: false,
        }
        console.log('Click happened');
    }

    render() {

        const { newUser } = this.state;
        console.log(newUser)
        return (
            <Router>
                <switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/Register" component={Register} />
                </switch>
            </Router>
        )
    }
}

export default Pages