import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom';
import Products from './products/Products';
import Login from './auth/Login';
import Register from './auth/Register';
import NotFound from './utils/notFound/NotFound';
import {GlobalState} from '../../GlobalState';

function Pages() {

    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged

    return (
        <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/login" component={ isLogged ? NotFound : Login} />
            <Route path="/register" component={ isLogged ? NotFound : Register} />

            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Pages
