import { DataTypes, Model } from "sequelize";
import sequelize from "./conection";

class Aluno extends Model{}

Aluno.init({
    // id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    //   },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    nota_primeiro_semestre: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    nota_segundo_semestre: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    nome_professor: {
        type: DataTypes.STRING,
        allowNull: false
      },
    numero_sala: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

},{
    sequelize,
    modelName: "tab_aluno", 
    timestamps: false,
});
export default Aluno;