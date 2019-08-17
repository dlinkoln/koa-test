const Router = require('koa-router');
const ctrl = require('./controllers');

const router = new Router();

router.get('home', ctrl.homePage);
router.get('other', ctrl.otherPage);
router.get('info', ctrl.maybeYes);

module.exports = router;
