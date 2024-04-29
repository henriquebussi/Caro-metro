const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

const Usuario = sequelize.define(
    "Turmas", {
        idTurmas: {
            type: Sequelize.INTEGER,
            primaryKey: true, // Define essa coluna como a chave primária
            autoIncrement: true, // Indica que é uma chave primaria autoincrementável
          },
          codigo: Sequelize.STRING,
          descricao: Sequelize.STRING,
          inicio: Sequelize.DATE,
          fim: Sequelize.DATE,
          fotos: Sequelize.STRING,


    },
    {
        timestamps: false, // Adiciona colunas createdAt e updatedAt automaticamente
      }
)

module.exports = Turmas;
