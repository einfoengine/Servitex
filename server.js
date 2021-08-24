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
app.use('/user', require('./routes/api/users'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});