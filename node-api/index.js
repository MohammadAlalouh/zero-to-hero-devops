const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>  {
    res.json({ Service: 'Node.js Express', Status: 'Awesome'});
});

app.listen(port, () => {
    console.log('Node API listening on port ${port}');
});