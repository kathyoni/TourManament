const express = require("express");
const dotenv = require('dotenv');
const { default: mongoose } = require("mongoose");
const routes = require('./src/routes');
const bodyParser = require('body-parser');


dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());


routes(app); 

// Kết nối với database
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("DB connect successfully");
})
.catch((error) => {
    console.log(error);
})


app.listen(port, () => {
    console.log("Server is running in port: " + port); 
});