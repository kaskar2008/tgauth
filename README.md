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

Your Telegram bot should send a POST request to your server at `/tblogin/` with required POST parameters  `authToken` and `botCode`.
In addition to the required params, you can transfer any desired parameters within the request body.

Example Python code:

```
import requests
...
url = 'http://localhost:3000/tblogin/'
requests.post(url, data={'botCode': '4dferiu7', 'authToken': 'xpAn7j8sK5StelAp5iJ3cU9Ii7xDsR0q', \
  'tgId': 213456, 'username': '@TrickOrTreat'})
```

Configuring the url not implemented yet, but I'm working on it.

### Note!

Default value of the `bot_access_token` is `xpAn7j8sK5StelAp5iJ3cU9Ii7xDsR0q`.

You can change <bot_access_token> from your server by calling a function _TGsetAT with 1 parametr - new acces token for your bot

### Examples:

```language-html
  <button>Login</button>
  <p>{{TGloginCode}}</p>
  <p>{{#if currentUser}}<u>Welcome, {{currentUser.username}}</u>{{/if}}</p>
```

On client side:

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

On server side:

```javascript
_TGsetAT('sdfdsrtfe45tcefw45tgvygujk89');
```
