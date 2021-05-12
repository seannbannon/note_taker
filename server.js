// ==============================================================================
// DEPENDENCIES
// Series of npm package(s) that will be used to give server useful functionality
// ==============================================================================

const express = require("express");


// This sets up the basic properties for the express server

// Tells node there is an "express" server created
const app = express();

// Sets an initial port used later in the listener
const PORT = process.env.PORT || 8080;


// Making the public folder accessible to the client side
app.use(express.static("public"));

// Unwrapping client data to make it readable for Express server to use.
// (stored in req.body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points Express server to a series of "route" files/paths.
// ================================================================================

// Includes apiRoute feature into the Express server
const apiRoutes = require("./routes/apiRoutes");
app.use(apiRoutes);
// require("./routes/apiRoutes")(app);

// Includes htmlRoute feature into the Express server
const htmlRoutes = require("./routes/htmlRoutes");
app.use(htmlRoutes);
// require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code "starts" the Express server
// =============================================================================

// Opening listeners (tunnel) to use back & forth
app.listen(PORT, function () {
  console.log("App is listening on PORT ", PORT);
});