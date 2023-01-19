const express = require('express')
const app = express()
const port = 3000;
const mainRoutes = require("./routes")
const path = require('path');

app.use('/', mainRoutes);

app.set("view engine", "ejs");
app.set('views', path.resolve(__dirname, './views'));

app.use(express.static("../public"));


app.listen(process.env.PORT || port, () => {
  console.log(`Sevidor corriendo en http://localhost:${port}`)
})
