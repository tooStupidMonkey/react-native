import React from 'react';
import {View} from 'react-native';
import MainBlockStyles from '@/styles';
import CreateNoteForm from '@/components/common/CreateNoteForm';

const AddNotes = () => {
    return (
        <View style={MainBlockStyles.container}>
            <CreateNoteForm />
        </View>
    );
};

export default AddNotes;