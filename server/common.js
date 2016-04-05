var tgbot_authToken = "xpAn7j8sK5StelAp5iJ3cU9Ii7xDsR0q";

_TGsetAT = function(newAT) {
	tgbot_authToken = newAT;
}

Sessions = new Meteor.Collection('sessions');

Router.route('/tblogin/', {where: "server"})
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
			Meteor.call("_TGlogin", botCode, user, function() {
				var user = {
					username: params.username,
					password: botCode,
					email: "",
					profile: {
						name: params.username,
						tgId: params.tgId,
						role: 'User'
					}
				};
				res.statusCode = 200;
				res.end("[Telegram login] botCode: " + botCode + "\n");
			});
		}
	});
