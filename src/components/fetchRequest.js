import { errorReporter } from "./utils"

const FetchRequest = async (url = "", data = {}, method = "GET", authorization = false) => {

    const headers = new Headers({
        "caller-app-id": "BISpublic",
        "Content-Type": "application/json",
        "Access-Control-Request-Method": method,
        "Access-Control-Request-Headers": "caller-app-id, Content-Type, Access-Control-Request-Method, Authorization"
    })

    if (authorization) {
        headers.append("Authorization", `Bearer ${data.accessToken}`)
    }

    const options = {
        headers,
        method: method.toUpperCase(),
    }

    if (options.method !== "GET") {
        options.body = JSON.stringify(data)
    }

    try {

        const request = await fetch(url, options)
        const response = await request.json()

        if (request.ok) {

            return response

        } else {

            throw Error("The request has failed.")
            
        }

    }

    catch (error) {

        errorReporter(error)
        
    }

}

export default FetchRequest 