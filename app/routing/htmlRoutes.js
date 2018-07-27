var path = require("path");

// routing
module.exports = function(app) {

    // app.get("/search", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/search.html"));
    // });

    // // If no matching route is found default to home
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/grumpy", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/grumpy.html"));
    });

}