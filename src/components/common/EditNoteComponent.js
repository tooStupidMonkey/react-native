import React, { Component } from 'react';
import {connect} from 'react-redux';
import {editNote} from '@/store/actions';
import MainBlockStyles from '@/styles';
import {View, Button, TextInput, Text} from 'react-native';
import PropTypes from 'prop-types'; 
import { updateActiveNote } from  '@/store/actions';

class EditNoteComponent extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        note: {},
    }

    componentDidMount() {
        this.setState({
            note: this.props.activeNote
        });
    }
    

    submitEditForm  = () =>  {
        const {updateActiveNote, editNote} = this.props;
        editNote({
                ...this.state.note,
                date: new Date(Date.now()).toLocaleString()
            });
        updateActiveNote({})
    }

    render() {
        const {state, submitEditForm} = this;
        const {updateActiveNote} = this.props;

        return (
            <View style={MainBlockStyles.container}>
                <Text style={MainBlockStyles.title}>Type your note below:</Text>
                <TextInput 
                    style={MainBlockStyles.inputStyles}
                    onChangeText={ note => this.setState({
                        note: {
                            ...state.note,
                            note
                        }
                    })} 
                    value={state.note.note}
                />
                <View style={MainBlockStyles.flexRowSpaceBetween}>
                    <Button
                        title="Cancel"
                        onPress={() => updateActiveNote({})}
                    />
                    <Button 
                        title="Save"
                        onPress={submitEditForm}
                    />
                </View>
            </View>
        );
    }
}

EditNoteComponent.propTypes = {
    activeNote: PropTypes.object,
    updateActiveNote: PropTypes.func,
    editNote: PropTypes.func
}

function mapStateToProps (state) {
    return {
        activeNote: state.activeNote
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateActiveNote: (value) => dispatch(updateActiveNote(value)),
        editNote: (note) => dispatch(editNote(note))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNoteComponent);