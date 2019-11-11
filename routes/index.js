const router = require('express').Router();

const estudiantesRoutes = require('../routes/estudiantes');
const empresasRoutes = require('../routes/empresas');
const boletosRoutes = require('../routes/boletos');

router.route('/')
  .get((req, res) =>{
    return res.send({ msg: 'API sistema de boletos' })
  });

router.use('/estudiantes', estudiantesRoutes);
router.use('/empresas', empresasRoutes);
router.use('/boletos', boletosRoutes);

module.exports = router;
