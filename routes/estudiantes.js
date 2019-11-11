const router = require('express').Router();
const estudiantesCtrl = require('../controllers/estudiantes');

router.route('/')
  .get(estudiantesCtrl.get);

router.route('/:matricula')
  .get(estudiantesCtrl.get);

module.exports = router;