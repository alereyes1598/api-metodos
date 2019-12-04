/* eslint-disable consistent-return */
const db = require('../models');

const get = async (req, res, next) => {
  try {
    if (!req.params.matricula) {
      const estudiantes = await db.Estudiante.findAll();
      return res.status(200).send(estudiantes);
    }
    let result = [];
    const estudiante = await db.Estudiante.findOne({
      where: {
        matricula: req.params.matricula,
      },
    });
    const boletos = await db.Boleto.findAll({
      where: {
        idEstudiante: estudiante.idEstudiante,
      },
    });
    console.log(boletos[0].dataValues);

    boletos.forEach(async (element,index) => {
      const empresa = await db.Empresa.findOne({
        where: {
          idEmpresa: element.idEmpresa,
        },
      });
      console.log(element.dataValues);
      boletos[index].dataValues.empresa = empresa.dataValues.nombre;
    });
    
    
    estudiante.dataValues.boletos = boletos;
    
    //console.log(boletos)

    return res.status(200).send([estudiante]);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  get,
};
