import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import EditNoteModal from '@/components/common/modals/EditNoteModal';
import {
    EDIT_MODAL
} from '@/store/actions';
import { toggleEditModal, updateActiveNote } from  '@/store/actions';
import _ from 'lodash';
import PropTypes from 'prop-types'; 

class ModalsComponent extends Component {
    render() {
        const {
            modals, 
            avtiveNote,
            handleEditModal,
        } = this.props;
        const isEditNoteVisible = !_.isEmpty(avtiveNote);
        return (
            /* This case dont uses */<View>
                { 
                    modals[EDIT_MODAL] && 
                    <EditNoteModal 
                        handleEditModal={handleEditModal} 
                        modalVisible={modals[EDIT_MODAL]}
                    /> 
                }
                {
                    isEditNoteVisible && <EditNoteModal modalVisible={isEditNoteVisible} /> 
                }
            </View>
        );
    }
}

ModalsComponent.propTypes = {
    modals: PropTypes.object,
    avtiveNote: PropTypes.object,
    handleEditModal: PropTypes.func
}

function mapStateToProps (state) {
    return {
        modals: state.modals,
        avtiveNote: state.activeNote
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handleEditModal: (value) => dispatch(toggleEditModal(value)),
        updateActiveNote: (note) => dispatch(updateActiveNote(note))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalsComponent);
