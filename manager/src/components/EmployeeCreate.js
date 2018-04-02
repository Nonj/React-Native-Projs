import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, CardSection, Input, Button} from './common';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions'

class EmployeeCreate extends Component {
    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Non"
                        value={this.props.name}
                        onChangeText={text => {this.props.employeeUpdate(prop:'name', value: text)}}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="(206)-555-5555"
                        value={this.props.value}
                        /* if name of key and value are same, can just pass in "value" for key, and value will also be variable */
                        onChangeText={value => {this.props.employeeUpdate(prop:'phone', value)}}
                    />
                </CardSection>

                <CardSection>

                </CardSection>

                <CardSection>
                    <Button> Create </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProp = (state) => {
    /* state.employeeForm is from combineReducer */
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };

}

export default connect(mapStateToProp, {employeeUpdate})(EmployeeCreate);
