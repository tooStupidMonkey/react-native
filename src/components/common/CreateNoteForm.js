import React, { Component } from 'react';
import {View,Text, TextInput, Button} from 'react-native';
import MainBlockStyles from '@/styles';
import {addNote} from '@/store/actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 
import * as RootNavigation from '#/RootNavigation';

class AddNotes extends Component {
    state = {
        note: ''
    }


    addNote = () => {
        let index = this.props.notes.length;
    
        if (index) {
            index = index + 1;
        }

        const note = {
            id: index,
            note: this.state.note,
            date: new Date(Date.now()).toLocaleString()
        }
        this.props.dispatch(
            addNote(note)
        );
        RootNavigation.navigate('Notes List');
    }

    render() {
        const {state, addNote} = this;
        return (
            <View style={MainBlockStyles.container}>
                <Text style={MainBlockStyles.title}>Type your new note below:</Text>
                <TextInput 
                    style={MainBlockStyles.inputStyles}
                    onChangeText={ note => this.setState({note})} 
                    value={state.note}
                />
                <Button 
                    title="Save"
                    onPress={addNote}
                />
            </View>
        );
    }
}

AddNotes.propTypes = {
    notes: PropTypes.array,
    dispatch: PropTypes.func
}

function mapStateToProps (state) {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(AddNotes);