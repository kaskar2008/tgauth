Package.describe({
  name: 'kaskar2008:telegram-bot-auth',
  version: '0.1.9',
  summary: 'Authorization system based on telegram bot',
  git: 'https://github.com/kaskar2008/tgauth',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('accounts-base');
  api.use('accounts-password');
  api.use('iron:router@1.0.12');
  api.use('yuukan:streamy@1.3.0');
  api.use('jparker:crypto-md5@0.1.1');
  api.use('templating', 'client');
  api.use('session', 'client');
  api.addFiles('client/common.js', 'client');
  api.addFiles('client/helpers.js', 'client');
  api.addFiles('server/common.js', 'server');
  api.addFiles('server/methods.js', 'server');
});
