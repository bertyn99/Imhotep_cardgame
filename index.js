const express = require("express");
// Create a new express application instance
const app = express();

app.use(express.static('public'))


app.get('/', function (req, res) {

});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});