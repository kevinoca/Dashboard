import React from "react"
import { Link } from "react-router-dom"
import Auth from "../components/authentication"

class UserProfile extends React.Component {

    constructor(props) {

        super(props)

        this.Auth = new Auth()

    }

    getUserSession = () => JSON.parse(localStorage.getItem("APP_SESSION"))

    signOut = async () => {

        this.props.setBlocking(true)

        const APP_SESSION = this.getUserSession()

        try {

            await this.Auth.signOut(APP_SESSION)

            this.props.signOut()

            this.props.showNotification("User logged out", "success")

        } catch (error) {

            this.props.showNotification("Please try again later", "warning")

        } finally {

            this.props.setBlocking(false);

        }

    }

    render = () => {

        const { firstName, lastName } = this.props.user

        return (

            <>

                <Link to="/home">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <hr></hr>
                <div>User: {firstName} / {lastName}</div>
                <br />
                <button onClick={() => this.signOut()}>logout</button>

            </>

        )

    }

}

export default UserProfile