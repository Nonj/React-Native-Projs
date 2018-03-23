import * as firebase from 'firebase';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header, Button, Spinner} from './components/common'
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null }

    // Setting up firebase data form
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCmHCL_yDBACZ5-TPfKI2ufU3OJsctSczs',
            authDomain: 'auth-test-react-native-89a8f.firebaseapp.com',
            databaseURL: 'https://auth-test-react-native-89a8f.firebaseio.com',
            projectId: 'auth-test-react-native-89a8f',
            storageBucket: 'auth-test-react-native-89a8f.appspot.com',
            messagingSenderId: '1076827741525'
          });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn:true});
            } else {
                this.setState({loggedIn:false});
            }
        });
    }

    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return (
                    <Button whenPress = {()=> firebase.auth().signOut()} >
                        Log out
                    </Button>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner/>
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication'/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;