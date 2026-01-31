// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an instance of the Express application
const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle login form submission
app.post('/login', (req, res) => {
  // Access form data
  const { username, password } = req.body;

  // Perform validation
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Check if the username and password are valid
  // You can implement your own authentication logic here
  // For example, you can check against a database or a list of valid credentials
  if (username === 'admin' && password === 'password') {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ error: 'Invalid username or password' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});