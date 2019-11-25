module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('BOLETOS_POR_ESTUDIANTE', {
    idRelacion: {
      allowNull: false,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idEstudiante: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    idEmpresa: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    cantidad: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
  }),
  down: queryInterface => queryInterface.dropTable('BOLETOS_POR_ESTUDIANTE'),
};
