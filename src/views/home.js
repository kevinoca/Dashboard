import React from "react"
import { Link } from "react-router-dom"

console.info(process.env.REACT_APP_USER_CREDENTIALS)

const Home = props => {

    return (

        <>
            {!props.authed && <Link to="/login">Login</Link>}
            {props.authed && <Link to="/dashboard">Dashboard</Link>}
            {props.authed && <Link to="/user-profile">User Profile</Link>}
            <hr></hr>
            <h1>Home</h1>
        </>

    )

}

export default Home