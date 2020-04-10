
export default function defaultNotes () {
    let notes = [];
    for (let i = 0; i < 20; i++) {
        notes.push({
            id: i,
            note: `Test note ${i}`,
            date: new Date(Date.now()).toLocaleString()
        });
    }
    return notes;
}