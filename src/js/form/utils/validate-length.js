import { getMaxLengthError } from '../constant';

export function validateLength(maxLength, value) {
    const isValidLength = typeof maxLength === 'number' ? value.length <= maxLength : true;

    return isValidLength ? '' : getMaxLengthError(maxLength);
}