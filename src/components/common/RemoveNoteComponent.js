import React, { Component } from 'react';
import {removeNote} from '@/store/actions';
import {View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 
import {FontAwesome} from '@expo/vector-icons';
import MainBlockStyles from '@/styles';

class RemoveNoteComponent extends Component {

    constructor(props) {
        super(props);
    }

    submitDelete = () => {
        const {id} = this.props;
        this.props.dispatch(removeNote(id));
    }

    render () {
        return (
            <View>
                <TouchableOpacity
                    onPress={this.submitDelete}
                >
                    <FontAwesome size={32} name="trash-o" style={MainBlockStyles.resetBackground} />
                </TouchableOpacity>
            </View>
        );
    }
}

RemoveNoteComponent.propTypes = {
    id: PropTypes.number,
    dispatch: PropTypes.func
}

export default connect()(RemoveNoteComponent);

