const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const exphbs = require("express-handlebars");
const port = 3000;
const p = path.join(__dirname, "public");

app.use(express.static(p));
app.use(express.urlencoded({ extended: false }));
const hbs = exphbs.create({
  extname: "hbs",
  layoutsDir: path.join(__dirname, "public", "views")
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.get("/", function(req, res, next) {
  res.render(path.join(p, "views", "index.hbs"), { layout: "layout" });
});

app.listen(3000);
