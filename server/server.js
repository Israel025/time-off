const express = require('express');
const port  = process.env.PORT || 3001;
const path = require("path");
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const extRequest = require("./handler");
// const extRequest = require("../build/");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(pino);


//Static file declaration
app.use(express.static(path.join(__dirname, "../build/")));

//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "../build/")));
  //
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname = "../build/index.html"));
  })
}

//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})





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