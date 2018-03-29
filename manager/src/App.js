import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCfnSsUYe3zYsQd4UdfRIYqNeIC16bH0J0",
            authDomain: "manager-a11fb.firebaseapp.com",
            databaseURL: "https://manager-a11fb.firebaseio.com",
            projectId: "manager-a11fb",
            storageBucket: "",
            messagingSenderId: "393895630489"
          };
          firebase.initializeApp(config);
    }


    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm/>
            </Provider>
        );
    }
}

export default App;