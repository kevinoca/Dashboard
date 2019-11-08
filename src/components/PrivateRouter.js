import React from "react"
import { Route, Redirect } from "react-router-dom"

const PrivateRouter = ({ component: Component, authed, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (authed)
            ? <Component {...rest} {...props} />
            : <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
        } />
    )
};

export default PrivateRouter