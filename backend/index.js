import express from "express";

const app = express();

app.listen(5174, () => 
  console.log('Server running on port 5174')
);

// Parse incoming requests with JSON payloads
// app.use(bodyParser.json());

// Handle GET request
app.get('/api/data', (req, res) => {
  // Logic to fetch data from a database or another source
  const data = { message: 'This is a GET request' };
  res.json(data);
});

// Handle POST request
app.post('/api/data', (req, res) => {
  // Process incoming data from the request body
  const receivedData = req.body;
  // Logic to handle the received data (e.g., store in a database)
  res.json({ message: 'Data received successfully' });
});
