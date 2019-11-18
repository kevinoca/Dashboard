import React from "react"
import { Link } from "react-router-dom"
import Auth from "../components/authentication"
import { formDataFormater } from "../components/utils"

class Login extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            error: undefined
        }

        this.Auth = new Auth()

    }

    submitForm = event => {

        event.preventDefault()

        this.props.setBlocking(true)

        const formData = formDataFormater(event.currentTarget)

        this.signIn(formData)

    }

    signIn = async (userCredentials) => {

        const user = await this.Auth.signIn(userCredentials)

        const success = () => {
            this.props.signIn(user)
            this.props.history.push("/dashboard")
            this.props.showNotification("User logeado, navegando a Dashboard", "success")
        }

        const failure = () => this.props.showNotification("Please, try again later", "warning")

        this.props.setBlocking(false)

        return (user)
            ? success()
            : failure()

    }

    showError = () => this.setState({ error: true })

    render = () => {

        if (this.state.error) {

            throw new Error("asd")

        } else {

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
                    <button type="button" onClick={() => this.showError()}>Error</button>

                </>

            )

        }

    }

}

export default Login