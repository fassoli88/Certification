const router = require('express').Router();
const certControllers = require('../controllers/cert');


router.get('/', certControllers.home);
router.get('/home', certControllers.homel);

router.get('/login', certControllers.login);
router.post('/login', certControllers.log);

router.get('/signup', certControllers.signup);
//router.get('/signupr', certControllers.signupr);
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