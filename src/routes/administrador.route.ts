import {Router} from "express";


import { createEstudiante,getEstudiantes,deleteId,getById} from "../controllers/administrador.controllers";

const administradorRouter: Router = Router();

administradorRouter.post("/creatEstudiante", createEstudiante);
administradorRouter.get("/getEstudiante", getEstudiantes);
administradorRouter.delete("/getEstudiante/deleteEstudiante/:idEstudiante", deleteId);
administradorRouter.get("/getEstudiante/:idEstudiante", getById);

export default administradorRouter;