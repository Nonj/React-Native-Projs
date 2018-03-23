// importing libraries
import React, { Component } from 'react';
import {View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {albums:[]};

    componentWillMount() {
        //console.log("bruh i wanna see it");


        //////////////////////////////////////
        // debugger; for debugging in console.
        //////////////////////////////////////

        // Returns a promise back to us
        // The json returned is an array of songs and their details,
        // so the state of albums array will now equal to that data
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({albums: response.data}));

    }

    // Function to take in input and render it 
    // (1)album={(2)album}
    // First album is what the "props" will be referencing or named as
    // The 2nd album is what is actually being passed in, or.. the value
    // can change the 1st "album" to "record" and then props will reference
    // it as "props.record" to get the "album" value;
    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>);
    }


    // required for class-based components
    render() {
        //console.log(this.state);
        
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;