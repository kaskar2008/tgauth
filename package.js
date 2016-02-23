Package.describe({
  name: 'kaskar2008:telegram-bot-auth',
  version: '0.0.1',
  summary: 'Authorization system based on telegram bot',
  // URL to the Git repository containing the source code for this package.
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('accounts-base');
  api.use('accounts-password');
  api.use('iron:router');
  api.use('yuukan:streamy');
  api.use('tmeasday:crypto-md5');
  api.addFiles('client/common.js', 'client');
  api.addFiles('client/helpers.js', 'client');
  api.addFiles('server/common.js', 'server');
  api.addFiles('server/methods.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('kaskar2008:telegram-bot-auth');
  api.addFiles('client/common.js', 'client');
  api.addFiles('client/helpers.js', 'client');
  api.addFiles('server/common.js', 'server');
  api.addFiles('server/methods.js', 'server');
});
