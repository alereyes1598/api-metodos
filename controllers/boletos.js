/* eslint-disable consistent-return */
const db = require('../models');


const put = async (req, res, next) => {
  try {
    const { idEmpresa, matricula } = req.params;
    const { cantidad } = req.body;

    const empresa  = await db.Empresa.findOne({
     where: {
       idEmpresa: idEmpresa
     } 
    });
    console.log(empresa);
    
    if (empresa == undefined){
      return res.status(404).send({msg: 'No se encontro la empresa'});
    }

    const estudiante = await db.Estudiante.findOne({
      where: {
        matricula: matricula,
      }
    });

    const registroBoleto = await db.Boleto.findOne({
      where: {
        idEstudiante: estudiante.idEstudiante,
        idEmpresa: idEmpresa,
      },
    });

    if(registroBoleto.cantidad < cantidad){
      return res.status(400).send({msg: 'No se puede realizar la compra'});
    }
    
    await registroBoleto.update({
      cantidad: registroBoleto.cantidad - cantidad,
    });

    return res.status(200).send({msg: 'Ok'});
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  put,
};
