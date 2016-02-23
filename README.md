### Authorization system for MeteorJs app based on telegram bot
###### This package uses:
* accounts-base
* accounts-password
* iron:router
* yuukan:streamy
* tmeasday:crypto-md5

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