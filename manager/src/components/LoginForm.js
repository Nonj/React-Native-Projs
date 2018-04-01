import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, CardSection, Input, Button} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';



class LoginForm extends Component {
    onEmailChange(text) {
        // action creator
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        // action creator
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    renderError() {
        if(this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle} > {this.props.error}</Text>
                </View>
            );
        }
    }


    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder='email@test.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        autoCorrect={false}
                        autoCapitalize={false}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        obstruct={true}
                        label="Password"
                        placeholder='Password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    <Button whenPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>

            </Card>
        );
    }
}

mapStateToProps = state => {
    const {email, password, error} = state.auth
    return {
        email: email,
        password: password,
        error: error
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color:'red'
    }
}


export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
