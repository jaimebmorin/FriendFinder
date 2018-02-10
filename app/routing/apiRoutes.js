

var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(tableData);
    });    
    app.post("/api/friends", function(req, res) {
        friends.push(req.body);
        res.json(true);
    });
    //for testing:
    app.post("/api/clear", function() {
        friends = [];
        console.log(friends);
      });
}

