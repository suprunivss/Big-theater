import { textError } from '../constant';

export function validateText(value) {
    const isValidValue = value.match(/^[A-Za-zА-Яа-я\-\ ]+$/);

    return isValidValue ? '' : textError;
}
