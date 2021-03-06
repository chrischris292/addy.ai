/* global gYear gWeek:true */
/* eslint no-undef: "error" */

var db = require('../../db_conn_football.js');
var connection = db;

// universal check authentication method
exports.isUnlocked = function isUnlocked() {
	return function (req, res, next) {
		var statement = 'SELECT * FROM addy_ai_football.league_voting_status ' +
			'WHERE week = ? AND year = ?;';
		// console.log('current week right now is: ' + gWeek + ' and year is: ' + gYear);
		connection.query(statement, [gWeek, gYear], function (err, results) {
			if (err || results[0] === null || results[0].locked === 1) {
				// console.log('redirected to: ' + req.originalUrl);
				return res.redirect('/football/dashboard');
			}

			return next();
		});
	};
};
