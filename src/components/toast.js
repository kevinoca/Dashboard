import { toast } from 'react-toastify';

const DefaultMessage = "No message available"

// Denifition of the rules for the toast behaviour for All variations
const Options = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true
}

const Toast = (message = DefaultMessage) => toast(message, Options)

const InfoToast = (message = DefaultMessage) => toast.info(message, Options)

const ErrorToast = (message = DefaultMessage) => toast.error(message, Options)

const WarningToast = (message = DefaultMessage) => toast.warn(message, Options)

const SuccessToast = (message = DefaultMessage) => toast.success(message, Options)

export { InfoToast, ErrorToast, WarningToast, SuccessToast }
export default Toast