
// LOAD DATA: linking route(s) to a series of "data" sources.
const fs = require("fs");
const router = require("express").Router();
let noteData = require("../db/db.json");
const { v4: uuidv4 } = require("uuid"); // UUID to create a unique ID

// ROUTING (CRUD operations)

// API GET Request
router.get("/api/notes", (req, res) => res.json(noteData));

// API POST Request & add unique ID
router.post("/api/notes", (req, res) => {
  req.body.id = uuidv4();
  noteData.push(req.body);
  fs.writeFile("./db/db.json", JSON.stringify(noteData), (err) => {
    if (err) throw err;
  });
  res.json(noteData);
});

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