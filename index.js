const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

let desert = require('./data/env_01.json');
let rainforest = require('./data/env_02.json');
let tundra = require('./data/env_03.json');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home/home.html'));
});

app.get('/1', (req, res) => {
    res.send(desert);
});

app.get('/2', (req, res) => {
    res.send(rainforest);
});

app.get('/3', (req, res) => {
    res.send(tundra);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});