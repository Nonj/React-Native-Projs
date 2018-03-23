import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import {Button, Card, CardSection} from './common';

class LoginForm extends Component {
    state = { text: ''};

    componentWillMount() {

    }

    render() {
        return (
            <Card>
                <CardSection>

                    <TextInput
                    value={this.state.text}
                    onChangeText= {text => this.setState( {text: text})}
                    style={{height:20, width:200}}
                    />

                </CardSection>

                <CardSection>

                </CardSection>

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;