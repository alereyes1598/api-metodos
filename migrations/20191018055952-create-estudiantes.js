module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ESTUDIANTES', {
    idEstudiante: {
      allowNull: false,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    matricula: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    nombre: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    apellidos: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  }),
  down: queryInterface => queryInterface.dropTable('ESTUDIANTES'),
};
