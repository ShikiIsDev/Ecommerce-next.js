"use client";
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let products = [
  { id: 1, name: 'Product 1', price: 100, description: 'Description of product 1' },
  { id: 2, name: 'Product 2', price: 200, description: 'Description of product 2' },
  { id: 3, name: 'Product 3', price: 300, description: 'Description of product 3' },
];

app.get('/src/app/page', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
