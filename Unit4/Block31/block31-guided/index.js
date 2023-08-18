// Run: node index.js
const express = require('express');
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/hello', (req, res) => {
    const name = req.query.name;
    res.send(`Hello ${name}!`);
});

app.get('/hello-query', (req, res) => {
    const name = req.query.name;
    res.send(`Hello ${name}!`);
});

