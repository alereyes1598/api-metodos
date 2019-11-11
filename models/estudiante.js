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
      type: DataTypes.INTEGER,
    },
    nombre: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'ESTUDIANTES',
    timestamps: false,
  });
  
  return Estudiante;
};
