var tgbot_authToken = "xpAn7j8sK5StelAp5iJ3cU9Ii7xDsR0q";

_TGsetAT = function(newAT) {
	tgbot_authToken = newAT;
}

_TGSessions = new Meteor.Collection('_tg_sessions');

Router.route('/tglogin/', {where: "server"})
	.post(function () {
		var reservedFields = ['authToken', 'botCode'];
		var params = this.request.body;
		var res = this.response;

		if (params === undefined || params === null) {
			res.statusCode = 400;
			res.end('No params provided');
			return;
		} else
		if (params.authToken === undefined || params.authToken === null ||
			params.botCode === undefined || params.botCode === null) {
			res.statusCode = 400;
			res.end('No auth token or bot code provided');
			return;
		} else
		if (params.authToken !== tgbot_authToken) {
			res.statusCode = 403;
			res.end('Bad token');
			return;
		} else {
			var user = {
				username: params.username,
				password: params.botCode,
				email: "",
				profile: {
					name: params.username,
					tgId: params.tgId,
					role: 'User'
				}
			};
			Meteor.call("_TGlogin", params.botCode, user, function(err, data) {
				if(data == 'ok') {
					res.statusCode = 200;
					res.end("[Telegram login] botCode: " + params.botCode + "\n");
				} else {
					res.statusCode = 405;
					res.end('Bad code');
				}
			});
		}
	});
