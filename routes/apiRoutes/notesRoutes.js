const router = require('express').Router();
//const { getNotes, saveNote, deleteNote } = require('../../public/assets/js/index');
const { notes } = require('../../db/notes');

router.get('/notes', (req, res) =>{
    res.json(notes);
});

//POST goes here

module.exports = router;