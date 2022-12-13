import { Request, Response } from "express";

export function vistaPrincipalAdministrador(req: Request, res: Response) {
    return res.render("vista-administrador/homAdmin");
}

