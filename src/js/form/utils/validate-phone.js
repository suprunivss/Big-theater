import { phoneError } from "../constant";

export function validatePhone(value) {
    const isValidPhone = value.match(/^\+?\d+$/);
    
    return isValidPhone ? '' : phoneError;
}