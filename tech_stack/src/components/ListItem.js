import React, { Component } from 'react';
import {Text, 
    View, 
    TouchableWithoutFeedback, 
    LayoutAnimation
} from 'react-native';
import {CardSection} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';



class ListItem extends Component {
    componentDidUpdate() {
        LayoutAnimation.spring();
    }


    renderDescription() {
        const {library, expanded} = this.props;
        if (expanded) {
            return(
                <CardSection>
                    <Text style={{flex: 1}}>
                        {library.description}
                    </Text>
                </CardSection>

            );
        }
    }

    render() {
        
        const {titleStyle} = styles;
        const {id, title} = this.props.library;

        return(
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection >
                        <Text style={titleStyle}> 
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>    
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryID === ownProps.library.id;
    return { expanded }
}


const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}


export default connect(mapStateToProps, actions)(ListItem);