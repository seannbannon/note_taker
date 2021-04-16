const express = require ('express');
const path = require ('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
const htmlRoutes = require("./routes/htmlroutes");

app.use(htmlRoutes);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));