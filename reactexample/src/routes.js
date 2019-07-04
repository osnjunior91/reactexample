import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import firebase from './firebaseConnection';

import Menu from './Menu';
import Login from './Login';
import Home from './Home';

const PrivateRoute = ({component: Componet, ...rest}) => (
    <Route
        {...rest}
        render={props => (
            firebase.auth().currentUser ? 
            (<Componet {...props}/>)
            : (
                <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
            )
        )}
    />
);

const Routes = () => {
    return(
        <BrowserRouter>
            <Menu/>
                <Switch>
                <Route exact path="/login" component = {Login} />
                <PrivateRoute exact path="/" component = {Home} />    
                </Switch>
        </BrowserRouter>
    );
}
export default Routes;