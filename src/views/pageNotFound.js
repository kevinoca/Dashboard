import React from "react"
import { Link } from "react-router-dom"

const PageNotFound = props => {

    return (
        <div>
            <Link to="/home">Home</Link>
            <h1>Error 404 - Page not found</h1>
        </div>
    )

}

export default PageNotFound