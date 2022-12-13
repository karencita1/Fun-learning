import express, { Application } from "express";
import morgan from "morgan";
import path from "path"


import dotenv from "dotenv";
dotenv.config();


const app: Application = express();
//

import vistasRouter from "./routes/vistas.route";
import administradorRouter from "./routes/administrador.route";
//settings
app.set("port", process.env.PORT || 4000);
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './views'));



//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')))


app.use("/vista",vistasRouter);
app.use("/administrador",administradorRouter);

//routes




export default app;