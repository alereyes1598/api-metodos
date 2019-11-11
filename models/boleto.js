module.exports = (sequelize, DataTypes) => {
  const Boleto = sequelize.define('Boleto', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idEstudiante: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    idEmpresa: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    cantidad: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'BOLETOS_POR_ESTUDIANTE',
    timestamps: false,
  });
  
  return Boleto;
};
