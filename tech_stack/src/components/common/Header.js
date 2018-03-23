// import libraries for making a component
import React from 'react';
import {Text, View} from 'react-native';

// make a component
// A component is a js function that returns some amount of jsx
// react-native will take our component and render it to the screen
// it will take what jsx is being returned and decide based on 
// the jsx what content will appear on the screen
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}> {props.headerText} </Text>
        </View>

    );
};

// style
const styles = {
    viewStyle: {        
        justifyContent: 'center', // vertical alignment
        alignItems: 'center', // horizontal alignment
        backgroundColor: '#F8F8F8',
        height: 60,
        paddingTop: 15,
        // shadowing
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: .2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}


// make component be available for other parts of the app
export {Header};