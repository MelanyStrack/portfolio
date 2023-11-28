const express = require("express");
const app = express();

const homeRouter = require("./routes/home.js")

app.use('/', homeRouter);

app.listen(3000,() =>{
    console.log("Servidor corriendo en el puerto 3000");
})

app.use(express.static("public"));