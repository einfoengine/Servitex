const express = require('express');
const moongoose = require('mongoose');
const config = require('config');
const app = express();
const port = 3000;

moongoose.connect(config.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
db = moongoose.connection;

db.on('error', (error)=>{console.log('!!!!!!',error)});
db.once('open', (error)=>{console.log('Connected to the database')});


app.get('/', (req, res) => {
    console.log("config -",config);

  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})