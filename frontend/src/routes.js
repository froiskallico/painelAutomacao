import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import LoginError from './pages/LoginError';
import Main from './pages/Main';
import Circuit from './pages/Circuit';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/LoginError' component={LoginError} />
                <Route path='/Main' component={Main} />
                <Route path='/Circuit' component={Circuit} />
            </Switch>
        </BrowserRouter>
    )
};