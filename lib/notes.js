const fs = require("fs");
const path = require("path");

function findNoteById(id, notesArr){
    const result = notesArr.filter(note => note.id === id)[0];
    return result;
};

function createNewNote(body, notesArr){
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    );
    return note;
};

module.exports = { createNewNote };