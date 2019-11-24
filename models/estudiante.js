module.exports = (sequelize, DataTypes) => {
  const Estudiante = sequelize.define('Estudiante', {
    idEstudiante: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    matricula: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    apellidos: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'ESTUDIANTES',
    timestamps: false,
  });
  
  return Estudiante;
};
