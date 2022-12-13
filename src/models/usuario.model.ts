import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import UsuarioType from "../types/usuario.type";
import { EstudianteModel } from "./estudiante.model";
export class UsuarioModel extends Model<UsuarioType> {
}
UsuarioModel.init(
{
  idUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  correo: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },

tipo_usuario: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: "Administrador"
  },


contrasena: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
},
{
  sequelize,
  timestamps: false, //Para que no se agreguen los campos CreateAt ni UpdateAt
  tableName: "usuario",
}
);

UsuarioModel.hasOne(EstudianteModel, {
    foreignKey: "idUsuario",
    sourceKey: "idUsuario"
  });