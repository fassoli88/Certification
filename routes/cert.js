const router = require('express').Router();
const certControllers = require('../controllers/cert');


router.get('/', certControllers.home);

router.get('/login', certControllers.login);

router.get('/signup', certControllers.signup);

router.get('/A+', certControllers.A);


module.exports = router;