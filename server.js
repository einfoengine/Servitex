const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB()

app.get('/', (req, res) => {res.send('Hello World!')});

// Routes
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});