module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('EMPRESAS', {
    idEmpresa: {
      allowNull: false,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      allowNull: false,
      type: Sequelize.STRING,
      primaryKey: true,
    },
  }),
  down: queryInterface => queryInterface.dropTable('EMPRESAS'),
};
