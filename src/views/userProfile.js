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

        let response = undefined

        this.props.setBlocking(true)

        const APP_SESSION = this.getUserSession()

        try {

            response = await this.Auth.signOut(APP_SESSION)

            this.props.signOut()

        } catch (error) {

            response = false

        } finally {

            this.props.setBlocking(false);

            (response)
                ? this.props.showNotification("User logged out", "success")
                : this.props.showNotification("Please try again later", "warning")

        }

    }

    render = () => {

        const { firstName, lastName } = this.props.user

        return (
            <>
                <Link to="/home">> Home</Link>
                <Link to="/dashboard">> Dashboard</Link>
                <hr></hr>
                <div>User: {firstName} / {lastName}</div>
                <br />
                <button onClick={() => this.signOut()}>logout</button>
            </>
        )

    }

}

export default UserProfile