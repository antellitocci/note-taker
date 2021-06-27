const router = require('express').Router();
const {  findNoteById, createNewNote, deleteSelectedNote } = require('../../lib/notes');
const { notes } = require('../../db/notes.json');

router.get('/notes', (req, res) =>{
    res.json(notes);
});

router.post('/notes', (req, res) => {
    //give request an id based on its position in the array or notes
    req.body.id = notes.length.toString();

    //we don't need to validate here because it is performed on the client side
    //the save button doesn't appear until both required form sections are filled
    
    //create new note
    const note = createNewNote(req.body, notes);
    res.json(note);

});

router.delete('/notes/:id', (req, res) => {
    let found = findNoteById(req.params.id, notes);
    if(found){
        let newArr = deleteSelectedNote(found, notes);
        res.json(newArr);
    }
    else{
        window.alert(`Could not delete note. Please ensure not exists and try again.`);
    }
});

module.exports = router;