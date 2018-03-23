import firebase from 'firebase';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from './components/common'
import LoginForm from './components/LoginForm';

class App extends Component {

    // Setting up firebase data form
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCmHCL_yDBACZ5-TPfKI2ufU3OJsctSczs",
            authDomain: "auth-test-react-native-89a8f.firebaseapp.com",
            databaseURL: "https://auth-test-react-native-89a8f.firebaseio.com",
            projectId: "auth-test-react-native-89a8f",
            storageBucket: "auth-test-react-native-89a8f.appspot.com",
            messagingSenderId: "1076827741525"
          });

    }

    render() {
        return (
            <View>
                <Header headerText='Hello'/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;