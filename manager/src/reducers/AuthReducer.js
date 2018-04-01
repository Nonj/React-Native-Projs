import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch(action.type) {
        case EMAIL_CHANGED:
            // return new object
            // put all the following properties in state and put
            // into that new object
            // then add property email to that object
            // to make it a "new" object
            return {...state, email: action.payload}

        case PASSWORD_CHANGED: 
            return {...state, password: action.payload}

        case LOGIN_USER_SUCCESS:
            return {...state, user: action.payload, error: ''}

        case LOGIN_USER_FAIL: {
            return {...state, error: 'Authentication Failed', password:''}
        }

        default: 
            return state;
    }
}