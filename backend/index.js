const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Backend çalışıyor!');
});

app.listen(port, () => {
  console.log(`Backend sunucusu http://localhost:${port} adresinde çalışıyor`);
});
