const express = require('express');
const controller=require("./controller")
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/add', controller.createuser)
app.post('/topic', controller.creatTopic)
app.post('/rank', controller.creatrank)
app.get('/getAllData', controller.getrank)
app.get('/gettopica', controller.gettopic)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});