const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB()

// Init Middleware
// app.use(express.json({
//   extended: false
// }));

app.use(express.json());

// Root route
app.get('/', (req, res) => {res.send('Hello World!')});

// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});