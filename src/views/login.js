import React from "react"
import { Link } from "react-router-dom"
import Auth from "../components/authentication"
import { formDataFormater } from "../components/utils"

class Login extends React.Component {

    constructor(props) {

        super(props)

        this.Auth = new Auth()

    }

    submitForm = event => {

        event.preventDefault()

        this.props.setBlocking(true)

        const formData = formDataFormater(event.currentTarget)

        this.signIn(formData)

    }

    signIn = async (userCredentials) => {

        let successfullyCompleted = undefined;

        try {

            const user = await this.Auth.signIn(userCredentials)

            successfullyCompleted = true;

            this.props.signIn(user)

            this.props.history.push("/dashboard")

        } catch (error) {

            successfullyCompleted = false

            console.info(error)

        } finally {

            this.props.setBlocking(false);

            (successfullyCompleted)
                ? this.props.showNotification("User logeado, navegando a Dashboard", "success")
                : this.props.showNotification("Please, try again later", "warning")

        }

    }

    render = () => {

        return (
            <>
                <Link to="/home">> Home</Link>
                <hr></hr>
                <h1>login</h1>
                <form onSubmit={e => this.submitForm(e)}>
                    <input defaultValue="frank.herbert@sice.com" type="text" name="emailLogin" required />
                    <br />
                    <input defaultValue="111111" type="password" name="password" required />
                    <br />
                    <input name="appId" value="PUBLIC" type="hidden" />
                    <br />
                    <button type="submit">SIGN IN</button>
                </form>
            </>
        )

    }

}

export default Login