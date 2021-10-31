import React from 'react';
import { Route } from 'react-router-dom'; 
import NavBar from './NavBar';

function LayoutRoute(props) {
    return (
        <React.Fragment>
            <NavBar 
                link1={{label:"Main", path: "/"}} 
                link2={{label: "About", path: "/about"}} 
                link3={{label: "Contact", path: "/contact"}}
                signUp={{label: "Register", path: "/register"}}
            ></NavBar>
            <Route path={props.path} exact={props.exact} component={props.component} />
        </React.Fragment>
    )
}

export default LayoutRoute;