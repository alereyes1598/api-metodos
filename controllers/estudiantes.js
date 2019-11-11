/* eslint-disable consistent-return */
const db = require('../models');

const get = async (req, res, next) => {
  try {
    if (!req.params.matricula) {
      const estudiantes = await db.Estudiantes.findAll();
      return res.status(200).send(estudiantes);
    }
    
    const estudiante = await db.Estudiantes.findOne({
      where: {
        matricula: req.params.matricula,
      },
    });
    
    return res.status(200).send(estudiante);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  get,
};
