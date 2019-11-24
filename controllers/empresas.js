/* eslint-disable consistent-return */
const db = require('../models');

const get = async (req, res, next) => {
  try {
    const empresas = await db.Empresa.findAll();
    return res.status(200).send(empresas);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  get,
};
