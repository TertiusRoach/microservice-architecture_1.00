const express = require('express');
const app = express();

app.get('/posts', (req, res) => {});

app.post('/posts', (req, res) => {});

let port = 8080;
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
