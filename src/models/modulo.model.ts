import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import ModuloType from "../types/modulo.type";
import { TemaModel } from "./tema.model";
export class ModuloModel extends Model<ModuloType> {
}

ModuloModel.init(
{
  idModulo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

tipo_modulo: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
numero_temas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},
{
  sequelize,
  timestamps: false, //Para que no se agreguen los campos CreateAt ni UpdateAt
  tableName: "modulo",
}
);	

TemaModel.hasMany(ModuloModel,{
    foreignKey:"idTema",
    sourceKey:"idTema",
    onDelete:'cascade',hooks:true,
    });