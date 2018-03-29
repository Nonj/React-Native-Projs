import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style= {style.sectionStyle}>
            {props.children}
        </View>
    );
};

const style = {
    sectionStyle: {
        borderBottomWidth: 1,
        padding:5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export {CardSection};