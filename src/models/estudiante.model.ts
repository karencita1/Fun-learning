import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import EstudianteType from "../types/estudiante.type";
import { ModuloModel } from "./modulo.model";
export class EstudianteModel extends Model<EstudianteType> {

}

EstudianteModel.init(
{
  idEstudiante: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },


nombre: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
apellido_paterno: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },

apellido_materno: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },

},
{
  sequelize,
  timestamps: false, //Para que no se agreguen los campos CreateAt ni UpdateAt
  tableName: "estudiante",
}

);

EstudianteModel.hasMany(ModuloModel,{
    foreignKey:"idEstudiante",
    sourceKey:"idEstudiante",
    onDelete:'cascade',hooks:true,
    });