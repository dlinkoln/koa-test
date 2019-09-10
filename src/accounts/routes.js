const Router = require('koa-router');
const passport = require('koa-passport');
const ctrl = require('./controllers');

const router = new Router();

router
  .post('/sign-in', ctrl.signIn)
  .post('/sign-up', ctrl.signUp)
  .get(
    '/profile',
    passport.authenticate('jwt', { session: false }),
    ctrl.profile,
  );

module.exports = router;
