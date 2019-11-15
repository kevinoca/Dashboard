import SERVICES from "../data/services"
import FetchRequest from "../components/fetchRequest"
import { errorReporter } from "../components/utils"

export default class Authentication {

    signIn = async (formData) => await getAuthenticationToken(formData)

    signOut = async (APP_SESSION) => {

        if (APP_SESSION) {

            try {

                localStorage.clear()

                return await deleteUserSession(APP_SESSION)

            } catch (error) {

                errorReporter(error)

            }

        }

    }

}

const deleteUserSession = async (APP_SESSION) => {

    const url = process.env["REACT_APP_PUBLIC_URL"] + SERVICES["BIS_LOGIN_API/LOGOUT"]

    const headers = new Headers({
        "caller-app-id": "BISpublic",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${APP_SESSION.accessToken}`,
        "Access-Control-Request-Method": "DELETE",
        "Access-Control-Request-Headers": "caller-app-id, Content-Type, Access-Control-Request-Method, Authorization"
    })

    const options = {
        headers,
        method: "DELETE",
        body: JSON.stringify(APP_SESSION)
    }

    try {
        await fetch(url, options)
    }

    catch (error) {

        errorReporter(error)

    }

}

const storeUserData = data => {

    const user = {
        id: 19873982,
        firstName: "Developer",
        lastName: "Lastname",
        email: "developer@sice.com",
        mobile: "697946218",
        accountNumber: 21601186,
        accountType: "Pre-paid Tag Account",
        paymentMode: "Automatic",
        accountBalance: 58.68,
        lastPayment: 35.51,
        currency: "€",
        lastPaymentDate: "16/01/2019"
    }

    setDataIntoLocalStorage("USER_DATA", user);
    setDataIntoLocalStorage("APP_SESSION", data);
    setDataIntoLocalStorage("APP_TOKKEN_CREATION", new Date());
    setDataIntoLocalStorage("REFRESH_TOKKEN_CREATION", new Date());

}

const setDataIntoLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))

const getAuthenticationToken = async (formData) => {

    const url = process.env["REACT_APP_PUBLIC_URL"] + SERVICES["BIS_LOGIN_API/LOGIN"]

    const response = await FetchRequest(url, formData, "POST")
    if (response) storeUserData(response)

    return response

}