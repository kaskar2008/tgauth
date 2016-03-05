var tgbot_authToken = "xpAn7j8sK5StelAp5iJ3cU9Ii7xDsR0q";

_TGsetAT = function(newAT) {
	tgbot_authToken = newAT;
}

Sessions = new Meteor.Collection('sessions');

Router.route('/tblogin/', {where: "server"})
	.post(function () {
		var reservedFields = ['authToken', 'botCode'];
		var params = this.request.body;

		if (params === undefined || params === null) {
			return;
		}

		var authToken = params.authToken;
		var botCode = params.botCode;

		if (authToken === undefined || authToken === null ||
				botCode === undefined || botCode === null) {
			return;
		}

		var user = {};

		for (var key in params) {
			if (reservedFields.indexOf(key) >= 0) {
				continue;
			}

			user[key] = params[key];
		}

		if (authToken !== tgbot_authToken) {
			return;
		}

		var res = this.response;

		Meteor.call("_TGlogin", botCode, user, function() {
			res.end("[Telegram login] botCode: " + botCode + "\n");
		});
	});
