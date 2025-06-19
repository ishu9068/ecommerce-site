const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'pages', 'index.html'));
});

app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'pages', 'products.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'pages', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'pages', 'contact.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'pages', 'login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'pages', 'signup.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);
