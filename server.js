const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the current directory (root)
app.use(express.static(path.join(__dirname, 'docs')));

// Dice endpoint
app.get('/roll-dice', (req, res) => {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  res.json({ diceRoll });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
