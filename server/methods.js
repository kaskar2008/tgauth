Meteor.methods({
	_TGtakeToken: function (token) {
		serverLoginCode = Math.random().toString(36).slice(-8);
		Sessions.upsert({
			token:token
		},{
			$set: {
				token:token,
				server_code:serverLoginCode,
				status:"open",
				dob: new Date()
			}
		});
		return serverLoginCode;
	},
	_TGlogin: function (uName, botCode) {
		if(Sessions.findOne({server_code:botCode, status:"open"})) {
			var userId = null;
			var user = Meteor.users.findOne({username: uName});
			if(!user) {
				userId = Accounts.createUser({username: uName, password: botCode, email: "", profile: {name: uName}});
			} else {
				userId = user._id;
			}
			var stampedLoginToken = Accounts._generateStampedLoginToken();
			Accounts._insertLoginToken(userId, stampedLoginToken);

			Sessions.update({server_code:botCode, status:"open"}, {
				$set: { dob: new Date(), status: "close" }
			});
			Streamy.broadcast(botCode, { token: stampedLoginToken.token });
			return "ok";
		} else {
			return '';
		}
	}
});