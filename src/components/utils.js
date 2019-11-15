import { InfoToast, ErrorToast, WarningToast, SuccessToast } from "../components/toast"

const formDataFormater = form => {

    const formatedData = {}

    new FormData(form).forEach((value, key) => formatedData[key] = value)

    return formatedData

}

const showNotification = (data, type) => {

    switch (type) {

        case "info":
            InfoToast(data)
            break;

        case "error":
            ErrorToast(data)
            break;

        case "warning":
            WarningToast(data)
            break;

        case "success":
            SuccessToast(data)
            break;

        default:
            InfoToast(data)
            break;
    }

}

const errorReporter = error => console.info(`%c ${error}`, 'background: #222; color: #bada55');

export { formDataFormater, showNotification, errorReporter }