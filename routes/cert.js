const router = require('express').Router();
const certControllers = require('../controllers/cert');


router.get('/home', certControllers.home);
router.get('/', certControllers.home);

router.get('/login', certControllers.login);

router.get('/signup', certControllers.signup);
router.post('/signup', certControllers.sign);

router.get('/A', certControllers.A);

router.get('/network', certControllers.network);

router.get('/ccna', certControllers.ccna);

router.get('/security', certControllers.security);

router.get('/ejpt', certControllers.ejpt);

router.get('/pentest', certControllers.pentest);

router.get('/oscp', certControllers.oscp);

router.get('/test', certControllers.test);



module.exports = router;