module.exports = (sequelize, DataTypes) => {
  const Empresa = sequelize.define('Empresa', {
    idEmpresa: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'EMPRESAS',
    timestamps: false,
  });
  
  Empresa.associate = (models => {
    Empresa.belongsToMany(models.Estudiante, {as: 'Empresa', through: models.Boleto, foreingKey: 'idEmpresa'});
  });
  return Empresa;
};
