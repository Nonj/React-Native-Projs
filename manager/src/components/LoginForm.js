import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged} from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        // action creator
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        // action creator
        this.props.passwordChanged(text);
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
                    />
                </CardSection>
                <CardSection>
                    <Input
                        obstruct="true"
                        label="Password"
                        placeholder='Password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>

            </Card>
        );
    }
}

mapStateToProps = state => {
    const {email, password} = state.auth
    return {
        email: email,
        password: password
    }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);
