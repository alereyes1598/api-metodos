const router = require('express').Router();
const boletosCtrl = require('../controllers/boletos');

router.route('/:idEmpresa/:matricula')
  .put(boletosCtrl.put);

module.exports = router;
