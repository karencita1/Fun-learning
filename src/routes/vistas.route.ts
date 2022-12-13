import {Router} from "express";


import { vistaPrincipalAdministrador} from "../controllers/vistas.controllers";

const vistasRouter: Router = Router();

vistasRouter.get("/", vistaPrincipalAdministrador);

export default vistasRouter;