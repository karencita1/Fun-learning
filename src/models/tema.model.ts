
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import TemaType from "../types/tema.type";

export class TemaModel extends Model<TemaType> {
}

TemaModel.init(
{
  idTema: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
nombre_tema: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
cantidad_material: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},
{
  sequelize,
  timestamps: false, //Para que no se agreguen los campos CreateAt ni UpdateAt
  tableName: "tema",
}
);

