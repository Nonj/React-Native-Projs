import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCCESS
} from './types';




export const employeeUpdate = ({ prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
};

export const employeeCreate = ({name, phone, shift}) => {
    //make sure we're gonig down the right path
    console.log(name, phone, shift);
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({name, phone, shift})
        .then(() => {
            dispatch({type: EMPLOYEE_CREATE});
            Actions.pop()
        });
    }
}

export const employeeFetch = () => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/emploees`)
        .on('value', snapshot=> {
            dispatch({type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()});
        });

    }
}