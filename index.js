var express = require('express');
var bodyParser = require('body-parser');

var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getTypeHobbies);

app.put('/name', mainCtrl.updateName);
app.put('/location', mainCtrl.updateLocation);

app.post('/hobbies', mainCtrl.createHobby);
app.post('/occupataions', mainCtrl.createOccupation);






var port = 5382;
app.listen(port, function() {
    console.log('listening to port ', port);
});
