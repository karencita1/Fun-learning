import { Request, Response } from "express";
import { EstudianteModel } from "../models/estudiante.model";
import { UsuarioModel } from "../models/usuario.model";

export async function createEstudiante(req: Request, res: Response) {
    const { user, apellidopaterno, apellidomaterno, rol, correo,contrasena } = req.body;
    
    let nombre=user;
    let apellido_paterno=apellidopaterno;
    let apellido_materno=apellidomaterno;
    let idUsuario, comprobarUsuario;
  
  
    await UsuarioModel.findOne({ where: { correo: correo } }).then(result =>
      comprobarUsuario = result?.getDataValue('correo'));
  
   
    if (comprobarUsuario == null) {
  
      
      await UsuarioModel.create({ correo: correo, contrasena: contrasena, tipo_usuario: rol }).then(result =>
        idUsuario = result.getDataValue('idUsuario'));
       
      await EstudianteModel.create({ nombre, apellido_paterno, apellido_materno, idUsuario });
      
      res.status(201).render("vista-administrador/homAdmin", { alert: true, alertTitle: 'CREADO', alertMessage: "", alertIcon: 'success', ruta: '/vista' });
  
    }

    else {
      res.render("vista-administrador/homAdmin", {
        alert: true, alertTitle: 'Error', alertMessage: "EMAIL YA EXISTE", alertIcon: 'error',ruta:'/vista',
      })
    }
  
  
  
  }

  export async function getEstudiantes(req: Request, res: Response) {
    
 //const records = await UsuarioModel.findAll({ raw: true, attributes: ["correo"] , include: [{ model: EstudianteModel, attributes: ["idEstudiante", "nombre", "apellido_paterno", "apellido_materno"] }]});
    const records = await EstudianteModel.findAll({ raw: true, attributes: ["idEstudiante", "nombre", "apellido_paterno", "apellido_materno"] });
    res.status(200).json(records);
  }


  export async function deleteId(req: Request, res: Response) {
    const { idEstudiante } = req.params;
    const entity = await EstudianteModel.findByPk(idEstudiante);
    await entity?.destroy();
    res.status(200).json("ok");
    
  }


  export async function getById(req: Request, res: Response) {
    console.log("no entre");
    const { idEstudiante } = req.params;
    const records = await EstudianteModel.findAll({ raw: true, where: { idEstudiante } });
    console.log(records);
    res.status(200).json(records);
  }
  

