export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const ADD_NOTE ='ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const EDIT_MODAL = 'EDIT_MODAL';
export const ACTIVE_NOTE = 'ACTIVE_NOTE';

export function receiveNotes (notes) {
    return {
        type: RECEIVE_NOTES,
        notes
    };
}

export function addNote (note) {
    return {
        type: ADD_NOTE,
        note
    };
}

export function removeNote (id) {
    return {
        type: REMOVE_NOTE,
        id
    };
}

export function editNote (note) {
    return {
        type: EDIT_NOTE,
        note
    };
}

export function toggleEditModal (value) {
    return {
        type: EDIT_MODAL,
        value

    };
}

export function updateActiveNote (note) {
    return {
        type: ACTIVE_NOTE,
        note
    };
}
