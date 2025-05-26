const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "src" folder
app.use(express.static(path.join(__dirname, 'src')));

app.listen(port, '0.0.0.0', () => {
  console.log(`Static site running on http://0.0.0.0:${port}`);
});
