import { emailError } from "../constant";

export function validateEmail(value) {
    const isValidEmail = value.match(/^[\w\.\-]{3,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,6}$/);

    return isValidEmail ? '' : emailError;
}
