import {
    RECEIVE_NOTES, 
    ADD_NOTE, 
    REMOVE_NOTE, 
    EDIT_NOTE, 
    EDIT_MODAL,
    ACTIVE_NOTE
} from '../actions';
import defaultNotes from '@/mockedData';

const initState = {
    notes: [
        ...defaultNotes()
    ],
    modals: {
        [EDIT_MODAL]: false
    },
    activeNote: {}
}

function notes(state = initState, action) {
    switch (action.type) {
        case RECEIVE_NOTES: 
            return {
                ...state,
                ...action.notes
            }
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.note]
            }
        case REMOVE_NOTE:
            return {
                ...state,
                notes: [...state.notes.filter(item => item.id !== action.id)]
            }
        case EDIT_NOTE: 
            const index = state.notes.findIndex(elem=>(elem.id === action.note.id));
            state.notes[index] = action.note;
            const newNotes = state.notes;
            return {
                ...state, 
                notes: [...newNotes]
            }     
        case EDIT_MODAL: 
            let newModals = state.modals;
            newModals[EDIT_MODAL] = action.value;
            return {
                ...state,
                modals: {...newModals}
            }
        case ACTIVE_NOTE: 
            return {
                ...state,
                activeNote: action.note
            }
        default:
            return state;        
    }
}

export default notes;