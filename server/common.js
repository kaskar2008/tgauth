Sessions = new Meteor.Collection('sessions');

Router.route('/tblogin/', function () {
	var params = this.params.query.q.split('-');
	if(params.length == 3) {
		var uid = params[0];
		var botCode = params[1];
		var at = params[2];
		if (at == tgbot_at) {
			var res = this.response;
			Meteor.call("_TGlogin", uid, botCode, function() {
				res.end("[Telegram login] userId: "+uid+"; BotCode:"+botCode+"\n");
			});
		}
	}
}, {where: "server"});