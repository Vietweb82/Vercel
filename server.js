const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express on Render!Server is active');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
