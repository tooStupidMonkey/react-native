import React from 'react';
import {View, Modal} from 'react-native';
import EditNoteComponent from '@/components/common/EditNoteComponent';
import PropTypes from 'prop-types'; 

const EditNoteModal =  function ({modalVisible}) {
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <EditNoteComponent />
            </Modal>
        </View>
    );
}

EditNoteModal.propTypes = {
    modalVisible: PropTypes.bool
}

export default EditNoteModal;