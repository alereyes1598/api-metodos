/* eslint-disable consistent-return */
const db = require('../models');

const get = async (req, res, next) => {
  
  let boletosArr = [];

  try {
    if (!req.params.matricula) {
      const estudiantes = await db.Estudiante.findAll();
      return res.status(200).send(estudiantes);
    }
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
      
    });

    for (const {item,index} of boletos.map((item, index) => ({ item, index }))) {

      const empresa = await db.Empresa.findOne({
        where: {
          idEmpresa: item.idEmpresa,
        },
      });
      boletosArr.push({nombre: empresa.nombre ,cantidad:boletos[index].cantidad});
      
    }
    
    console.log(boletosArr);
    let estudianteObj = estudiante.dataValues;
    
    estudianteObj.boletos = boletosArr;
    //console.log(estudianteObj);

    return res.status(200).send([estudianteObj]);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  get,
};
