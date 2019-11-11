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
      type: Sequelize.INTEGER,
    },
    nombre: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    aula: {
      allowNull: true,
      type: Sequelize.STRING,
    },
  }),
  down: queryInterface => queryInterface.dropTable('ESTUDIANTES'),
};
