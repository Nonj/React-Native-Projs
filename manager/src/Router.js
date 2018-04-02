import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene 
                        key="login" 
                        component={LoginForm}
                        title="Please Login" 
                        initial   
                    />
                </Scene>

                <Scene key="main">
                    <Scene
                        /* This key is used for Actions.{key} 
                        which will navigate to this scene
                        */
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        rightTitle="Add"
                        onRight= {() => Actions.employeeCreate()}
                        initial
                    />

                    <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                        rightTitle="Add"
                        onRight= {() => {console.log('right')}}
                    
                    />    
                </Scene>

            </Scene>
        </Router>
    );
};

export default RouterComponent;