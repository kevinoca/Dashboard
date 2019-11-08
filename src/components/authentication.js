import SERVICES from "../data/services"
import FetchRequest from "../components/fetchRequest"

export default class Authentication {

    constructor() {

        this.url = process.env["REACT_APP_PUBLIC_URL"] + SERVICES["BIS_LOGIN_API/LOGIN"]

        //* TODO: REMEMBER DELETE THIS, IT'S ONLY FOR LOCAL DEVELOPMENT
        this.user = {
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

    }

    signIn = async (formData) => {

        try {

            const userSession = await this.getAuthenticationToken(formData)

            this.setDataIntoLocalStorage("USER_DATA", this.user);
            this.setDataIntoLocalStorage("APP_SESSION", userSession);
            this.setDataIntoLocalStorage("APP_TOKKEN_CREATION", new Date());
            this.setDataIntoLocalStorage("REFRESH_TOKKEN_CREATION", new Date());

            return this.user

        } catch (error) {

            console.info(error)

        }

    }

    signOut = async (APP_SESSION) => {

        if (APP_SESSION) {

            try {

                localStorage.clear()

                const response = await this.deleteUserSession(APP_SESSION)

                return response

            } catch (error) {

                console.info(error)

            }

        }

    }

    deleteUserSession = async (APP_SESSION) => {

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
            return true
        }

        catch (error) {
            console.log(`%c ${error}`, 'background: #222; color: #bada55');
            return error;
        }

    }

    setDataIntoLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))

    getAuthenticationToken = async (formData) => await FetchRequest(this.url, formData, "POST")

}