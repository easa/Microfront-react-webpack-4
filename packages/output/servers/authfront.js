const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3003;
app.use(cors());

app.use('/', express.static(path.join(__dirname, '../packages/authfront')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../packages/authfront/index.html'));
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));