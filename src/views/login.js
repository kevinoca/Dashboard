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

    render = () => {

        const { name, password } = JSON.parse(process.env.REACT_APP_USER_CREDENTIALS)

        return (

            <>

                <Link to="/home">Home</Link>
                <hr></hr>
                <h1>login</h1>
                <form onSubmit={e => this.submitForm(e)}>
                    <input defaultValue={name} type="text" name="emailLogin" required />
                    <br />
                    <input defaultValue={password} type="password" name="password" required />
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