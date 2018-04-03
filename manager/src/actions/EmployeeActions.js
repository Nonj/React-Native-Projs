import {EMPLOYEE_UPDATE} from './types';



export const employeeUpdate = ({ prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
};

export const employeeCreate = ({name, phone, shift}) => {
    //make sure we're gonig down the right path
    console.log(name, phone, shift);
}