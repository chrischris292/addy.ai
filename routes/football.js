// Default getters for page navigation

var express = require('express');
var router = express.Router();

var loginAuth = require('./utilities/loginAuthenticationMiddleware.js');


/* Login home page */
router.get('/', function (req, res) {
	res.render('football', { title: 'addy.ai' });
});

/* Login home page */
router.get('/login', function (req, res) {
	res.render('football', { title: 'addy.ai' });
});

/* Login home page */
router.get('/dashboard', loginAuth.isAuthenticated, function (req, res) {
	res.render('football', { title: 'addy.ai' });
});

/* Login home page */
router.get('/dashboard/leagues', loginAuth.isAuthenticated, function (req, res) {
	res.render('football', { title: 'addy.ai' });
});

/* Login home page */
router.get('/dashboard/league/*/voting', loginAuth.isAuthenticated, function (req, res) {
	res.render('football', { title: 'addy.ai' });
});

/* Login home page */
router.get('/dashboard/league/*/leaderboard', loginAuth.isAuthenticated, function (req, res) {
	res.render('football', { title: 'addy.ai' });
});

/* Login home page */
router.get('/dashboard/admin', loginAuth.isAuthenticated, function (req, res) {
	res.render('football', { title: 'addy.ai' });
});

/* Login home page */
// router.get('/*', loginAuth.isAuthenticated, function (req, res) {
// 	res.render('football', { title: 'addy.ai' });
// });


module.exports = router;
