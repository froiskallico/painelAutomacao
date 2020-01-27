import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import LoginError from './pages/LoginError';
import Main from './pages/Main';
import Circuit from './pages/Circuit';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to = {{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/LoginError' component={LoginError} />
                <PrivateRoute path='/Main' component={Main} />
                <PrivateRoute path='/Circuit' component={Circuit} />
            </Switch>
        </BrowserRouter>
    )
};
