const express = require('express');
const router = express.Router();
const serveNotesHtml = require ("../controller/htmlcontroller.js")

router.get("/api/notes", serveNotesHtml)
router.post("/api/notes", serveNotesHtml)
module.exports = router