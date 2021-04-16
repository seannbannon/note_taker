const { Router } = require('express');
const express = require('express');
const router = express.Router();
const serveNotesHtml = require ("../controller/htmlcontroller.js")

router.get("/notes", serveNotesHtml)
module.exports = router