const router = require('express').Router();
const certControllers = require('../controllers/cert');


router.get('/', certControllers.home);

router.get('/login', certControllers.login);

router.get('/signup', certControllers.signup);

router.get('/A', certControllers.A);

router.get('/network', certControllers.network);

router.get('/ccna', certControllers.ccna);

router.get('/security', certControllers.security);

router.get('/ejpt', certControllers.ejpt);

router.get('/pentest', certControllers.pentest);

router.get('/oscp', certControllers.oscp);



router.post('/signup', certControllers.sign);
module.exports = router;