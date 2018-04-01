import {
    EMAIL_CHANGED, 
    PASSWORD_CHANGED
} from './types';

// to keep status of email
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}