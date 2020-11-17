const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3500;

const users = require('./routes/usersRoutes');
const teachers = require('./routes/teachersRoutes');
const students = require('./routes/studentsRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/users', users);
app.use('/teachers', teachers);
app.use('/students', students);

app.get('/', function(req,res) {
    res.send('Hello');
})

app.listen(PORT, function() {
    console.log('Server is running on localhost: '+ PORT);
})