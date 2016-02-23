Meteor.telegramStartLogin = function(callback) {
	var tmpToken = CryptoJS.MD5(new Date().toString()).toString();
	Meteor.call("_TGtakeToken", tmpToken, function(error, result) {
		Session.set('TGloginCode', result);
		Streamy.on(result, function(d, s) {
			Meteor.loginWithToken(d.token, callback);
		});
	});
};