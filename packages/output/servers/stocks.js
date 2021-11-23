const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3002;
app.use(cors());

app.use('/', express.static(path.join(__dirname, '../packages/stocks')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../packages/stocks/index.html'));
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));