import React, {Component} from 'react';
import { Text } from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';
import * as firebase from 'firebase'; 

class LoginForm extends Component {
    state = { emailText: '', passwordText: '', error: '', loading: false};

    onButtonPress() {
        const {emailText, passwordText } = this.state;
        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(emailText, passwordText).then(this.onLoginSuccess.bind(this))
        .catch (() => {    
            firebase.auth().createUserWithEmailAndPassword(emailText, passwordText).then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail() {
        this.setState({ 
            loading: false,
            error: 'Authentication Failed.'
        });
    }

    onLoginSuccess() {
        this.setState({ 
            emailText: '',
            passwordText: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small"/>;
        }
        return (
            <Button whenPress={this.onButtonPress.bind(this)} >
                Log In
            </Button>
        );
    }


    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        obstruct={false}
                        onChangeText= {email => this.setState( {emailText: email})}
                        placeholder="user@gmail.com"
                        value={this.state.emailText}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        obstruct={true}
                        onChangeText= {password => this.setState( {passwordText: password})}
                        placeholder="password"
                        value={this.state.passwordText}
                    />
                </CardSection>

                <Text style= {styles.errorTextStyle} > {this.state.error} </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;