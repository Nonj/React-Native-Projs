import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';




// Since information being presented is static, and wont need rendering,
// we can use functional component (const) instead of class based component
const AlbumDetail = ( { album }) => {

    const { title, 
            artist, 
            thumbnail_image, 
            image, 
            url } = album;

    const { thumbnailStyle, 
            headerTextStyle, 
            thumbnailViewStyle,
            headerTextBold,
            imageStyle } = style;

    return ( 
        // Component card is getting passed the <text> tag </text>
        <Card>

            
            <CardSection>
                <View style={thumbnailViewStyle }>

                    <Image 
                    style={thumbnailStyle}
                    source={{ uri: thumbnail_image }} 
                    />

                </View>
                
                <View style={headerTextStyle}>
                    <Text style={headerTextBold} > {title} </Text>
                    <Text> {artist} </Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                style = {imageStyle}
                source={{ uri: image }} 
                />
            </CardSection>

            <CardSection>
                <Button whenPress={() => Linking.openURL(url) }>
                    Buy Now!
                </Button>
            </CardSection>

        </Card>   
    );
};

const style = {
    headerTextStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerTextBold: {
        fontSize:18
    },

    thumbnailStyle: {
        height: 50,
        width: 50
    },

    thumbnailViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:10,
        marginRight:10
    },

    imageStyle: {
        height: 300,
        // flex1 and width null makes image strech all the way
        // across screen
        flex: 1,
        width: null
    }

}


export default AlbumDetail;