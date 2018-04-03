import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {Card, CardSection, Input, Button} from './common';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions'

class EmployeeCreate extends Component {
    onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift});
    }

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

                <CardSection style={{ flexDirection: 'column'}}>
                    <Text style={style.pickerText}> Shift </Text>
                    <Picker
                        //style={{flex: 1}}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate(
                            {prop: 'shift', value: day})}

                    >
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress().bind(this)}> Create </Button>
                </CardSection>

            </Card>
        );
    }
}

const style = {
    pickerText:{
        fontSize: 18,
        paddingLeft: 20,
    }
}

const mapStateToProp = (state) => {
    /* state.employeeForm is from combineReducer */
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };

}

export default connect(mapStateToProp, {
    employeeUpdate,
    employeeCreate
})(EmployeeCreate);
