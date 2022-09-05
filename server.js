'use strict';

const express = require('express');


const app = express();
const cors = require('cors');
app.use(cors());


app.use(express.json());



app.get('/', (req, res) => {
    res.status(200).send("Hello World");
});

app.post('/person', (req, res) => {

    const { user } = req.body;
    res.status(201).json({ name: user.name, age: parseInt(user.age) + 5, gender: user.gender });
});

function start(PORT) {
    app.listen(PORT, () => {
        console.log(`Server Running on Port: ${PORT}!`);
    });
}

module.exports = { start: start, app: app };

