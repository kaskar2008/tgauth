Sessions = new Meteor.Collection('sessions');

Router.route('/tblogin/', function () {
	var params = this.params.query.q.split('-');
	var uid = params[0];
	var botCode = params[1];
	var res = this.response;
	Meteor.call("_TGlogin", uid, botCode, function() {
		res.end("[Telegram login] userId: "+uid+"; BotCode:"+botCode+"\n");
	});
}, {where: "server"});

console.log("Opened sessions: "+Sessions.find({status:"open"}).count());