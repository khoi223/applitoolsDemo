const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1 id="title">Hello World</h1>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
