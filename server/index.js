const express = require('express');
const port  = 3001;
const path = require("path");
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const extRequest = require("./handler");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(pino);


app.get("/", (req, res) => {
  res.send("Project Powered by Express");
});

app.get("/holidays", extRequest);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '././public/index.html')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '././build', 'index.html'));
  });
}

// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

app.listen(port, (err) =>{
  if(err){
    console.log(err);
  }else{
    console.info(`Express server running at ${port}`);
  }
});