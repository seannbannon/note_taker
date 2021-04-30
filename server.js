const express = require ('express');
const app = express();
const path = require ('path');
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require ("./routes/apiRoutes")

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 
app.use(htmlRoutes);
app.use(apiRoutes)

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));