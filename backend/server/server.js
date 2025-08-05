const express = require('express');
const app = express();
const port = 3000; // You can choose any port that is free on your system

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
{
  "checklist": [
    {
      "step": "Install Node.js",
      "completed": true
    },
    {
      "step": "Initialize a new Node.js project with npm init",
      "completed": true
    },
    {
      "step": "Install Express with npm install express",
      "completed": true
    },
    {
      "step": "Create a server.js file",
      "completed": true
    },
    {
      "step": "Write code to set up the Express server",
      "completed": true
    },
    {
      "step": "Run the server with node server.js",
      "completed": true
    }
  ]
}