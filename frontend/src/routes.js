import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import LoginError from './pages/LoginError';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/LoginError' component={LoginError} />
            </Switch>
        </BrowserRouter>
    )
};