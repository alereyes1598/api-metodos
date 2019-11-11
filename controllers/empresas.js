/* eslint-disable consistent-return */
const Validator = require('validatorjs');
const db = require('../models');

const io = require("socket.io-client");

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
