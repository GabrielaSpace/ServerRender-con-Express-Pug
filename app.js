const bodyParser = require("body-parser");
const express = require("express");
const fetch = require('node-fetch');
const port = 3000;
const app = express();
app.use(express.json()); 

app.use(bodyParser.urlencoded({ extended: true }));
// Template engine
app.use(express.static('public'));
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/film", (req, res) => {
  res.render("film");
});


/* app.post('/film', (req, res) => {
  const data= JSON.parse(body.title);
  console.log(data)
  console.log("*******DATOS ENVIADOS*******");
  console.log(req.body);
  const {title} = req.body;
  res.status(201).json({msj:`Movie: ${title}`});
})



//Title,Genre,
app.get('/film/:title', async (req, res) => {
  if (Madrid) {
      try {
          let response = await fetch(`http://www.omdbapi.com/?t=Madrid&apikey=bd13e4ce`);
          let film = await response.json(); //{}
          res.render('film'); // Pinta datos en el pug
      }
      catch (error) {
          console.log(`ERROR: ${error.stack}`);
      }
    } else{
      console.log('error')
    } 
});


 */

app.listen(port, () => console.log(`Serving on ${port} https://localhost:3000`));

