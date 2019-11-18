import React from "react"
import { Link } from "react-router-dom"

export default class ErrorTemplate extends React.Component {

    constructor(props) {

        super(props)

        this.state = {}

    }

    render = () => {

        <AppLayout>
            <Link to="/home">Home</Link>
            ¡Error!
        </AppLayout>

    }

}