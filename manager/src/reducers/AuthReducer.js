import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: ''
};

export default (state = INITIAL_STATE, action) => {
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

        default: 
            return state;
    }
}