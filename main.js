const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'assets' and 'style' directories
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/style', express.static(path.join(__dirname, 'style')));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});