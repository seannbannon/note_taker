// const express = require('express');
// const router = require('express').Router();
// const serveNotesHtml = require ("../controller/htmlcontroller.js")

// router.get("/api/notes", serveNotesHtml)
// router.post("/api/notes", serveNotesHtml)
// module.exports = router;


// LOAD DATA: linking route(s) to a series of "data" sources.
const fs = require("fs");
const router = require("express").Router();
const noteData = require("../db/db.json");
const {v4:uuidv4}  = require("uuid"); // UUID to create a unique ID

// ROUTING (CRUD operations)

// API GET Request
router.get("/api/notes", (req, res) => {
  console.log("route hit")
  fs.readFileSync("db/db/json", "utf8", (err,data) =>{
    if(err){
      console.err(err)
    }
    else{
      res.json(JSON.parse(data))
      console.log(data, "from get")
    }
  })

  
  });



router.post("/api/notes", (req, res) =>{
  fs.readFile("db/db.json", "utf8", (err,data) =>{
    if(err) {
      console.err(err)
    }
    else{
      const notes = JSON.parse(data)
      const newNotes = req.body
      const idKey = "id"
      const notesId = uuidv4()
      newNotes[idKey] = notesId
      notes.push(newNotes)
      fs.writeFile("db/db.json", JSON.stringify(notes), (err) => {
        if(err) throw err
        res.json(notes)
        console.log(notes)
      })
    }
  })
})

// Delete Note by unique ID
router.delete("/api/notes/:id", (req, res) => {
  const deleteID = req.params.id;
  // ID record to delete
  for (let i = 0; i < noteData.length; i++) {
    if (noteData[i].id === deleteID) {
      noteData.splice(i, 1);
    }
  }
  // Rewrite to DB file
  fs.writeFile("./db/db.json", JSON.stringify(noteData), (err) => {
    if (err) throw err;
  });
  deleteData = noteData;
  res.json(deleteData);
});

module.exports = router;