const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

// Middleware
app.use(express.json());


// Routes
app.get('/hello', (req, res) => {
    res.send('hello');
})

app.use('/api/v1/tasks',tasks) // get all tasks


// Port
const port = 3000;
app.listen(port, function() {
    console.log(`Express server listening on port: ${port}`);
});