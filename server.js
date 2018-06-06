const express = require("express");
const exphbs = require("express-handlebars");
const sequelize = require("sequelize");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.use(express.static(__dirname + '/public'))



app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

// db.sequelize.sync().then(() => {
app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});