import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
//import cors from 'cors';
require('dotenv').config();

let app = express();
//  app.use(cors({ origin: true }));

//config app to run
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRoutes(app);

//connect to databse
connectDB();

let port = process.env.PORT;
app.listen(port, () => {
    //callback
    console.log("Backed nodejs is running on the port: " + port);
});