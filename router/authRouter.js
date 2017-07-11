const authRouter = require('express').Router();
const passport = require('passport');


// Google oauth route
authRouter.get('/google',
  passport.authenticate('google', { prompt: 'consent', scope: ['profile', 'email'] }));

// Google oauth callback
authRouter.get('/google/callback',
  passport.authenticate('google', {
    prompt: 'consent',
    failureRedirect: '/auth/google',
    successRedirect: '/',
  }) // eslint-disable-line
);

// authRouter.get('/success', (req, res) => {
//  res.status(202).send('login success')
// }) // this runs super slow as a success redirect. 


module.exports = authRouter;
