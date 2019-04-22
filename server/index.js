const http = require("http");
const express = require ("express"); 
const port  = process.env.PORT || 3310;
const path = require("path");
const extRequest = require("./handler");

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Use express static
if (process.env.NODE_ENV !== "production") {
  app.use(express.static(path.join(__dirname, '../public')));
} else {
  app.use(express.static(path.join(__dirname, '../build')));
}

app.get('/', (req, res) => {
  if (process.env.NODE_ENV !== "production") {
      res.sendFile(path.join(__dirname, '../public/index.html'));
  } else {
      res.sendFile(path.join(__dirname, '../build/index.html'));
  }
});

//holiday api
app.get("/holidays", extRequest);

server.listen(port, (err) =>{
  if(err){
    console.log(err); 
  }else{
    console.info(`express port opened at ${port}`);
  }
});