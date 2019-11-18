import React from "react"
import AppLayout from "../components/appLayout"

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        console.info(error, errorInfo)
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {

        if (this.state.errorInfo) {
            // Error path
            return (
                <AppLayout>
                    <div>¡Error!</div>
                    <div>Reload the template</div>
                    <a href="./home">Reload</a>
                </AppLayout>
            )
        }

        // Normally, just render children
        return this.props.children;

    }

}