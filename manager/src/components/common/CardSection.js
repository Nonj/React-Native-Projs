import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (

        /* 
            The style = [1, 2 ] means that use 1
            but if 2 is there, override 1 with 2
        
        */
        <View style = {[style.sectionStyle, props.style]}>
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