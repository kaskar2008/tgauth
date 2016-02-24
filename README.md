### Authorization system for MeteorJs app based on telegram bot
###### This package uses:
* accounts-base
* accounts-password
* iron:router
* yuukan:streamy
* jparker:crypto-md5

###### Notice! Add them to the project first (put into `packages` file or use commands below)

```
meteor add accounts-base;
meteor add accounts-password;
meteor add iron:router;
meteor add yuukan:streamy;
meteor add jparker:crypto-md5
```

### Note!

Your Telegram bot should send request to your server at `/tblogin/` with get parametr `q` and value `<telegram_username>-<generated_code>`.
Example:
```
localhost:3000/tblogin/?q=myNick-ddfe323f
```

Configuring this url not implemented yet, but I'm working on it

### Examples:

```language-html
  <button>Login</button>
  <p>{{TGloginCode}}</p>
  <p>{{#if currentUser}}<u>Welcome, {{currentUser.username}}</u>{{/if}}</p>
```

On clent side:

```javascript
Router.configure({
	layoutTemplate: 'hello'
});

if (Meteor.isClient) {

	Template.hello.helpers({
		currentUser: function() {
			return Meteor.user();
		}
	});

	Template.hello.events({
		"click button": function (event) {
			Meteor.telegramStartLogin();
		}
	});
}
```