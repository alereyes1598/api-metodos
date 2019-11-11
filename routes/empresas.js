const router = require('express').Router();
const empresasCtrl = require('../controllers/empresas');

router.route('/')
  .get(empresasCtrl.get)

module.exports = router;
