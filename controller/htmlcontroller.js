const path = require ('path');

function serveNotesHtml(req, res){
    res.sendFile(path.join(__dirname, '../public/notes.html'))
}

module.exports = serveNotesHtml