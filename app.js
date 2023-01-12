const bodyParser = require("body-parser");
const express = require("express");
const fetch = require('node-fetch');
const port = 3000;
const app = express();
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Template engine
app.use(express.static('public'));
app.set("view engine", "pug");
app.set("views", "./views");


app.get("/", (req, res) => {
  res.render("home");
});
app.get('/film/:title', async (req, res) => {
  if (req.params.title) {
          let resp = await fetch(`http://www.omdbapi.com/?t=${req.params.title}&apikey=bd13e4ce`);
          let film = await resp.json(); 
          console.log(film.Title)
          console.log(film.Genre)
          res.render("film",{film}); // Pinta datos en el pug
    }});
app.post('/', (req, res) =>
res.redirect(`/film/${req.body.title}`))


app.listen(port, () => console.log(`Serving on ${port} http://localhost:3000`));

