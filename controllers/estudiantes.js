/* eslint-disable consistent-return */
const db = require('../models');

const get = async (req, res, next) => {
  try {
    if (!req.params.matricula) {
      const estudiantes = await db.Estudiante.findAll({
        include: [{
          model: db.Empresa,
        }]
      });
      return res.status(200).send(estudiantes);
    }
    
    const estudiante = await db.Estudiante.findOne({
      where: {
        matricula: req.params.matricula,
      },
    });
    
    return res.status(200).send([estudiante]);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  get,
};
