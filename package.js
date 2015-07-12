Package.describe({
  name: '4commerce:meteor-namespace-template-helper',
  version: '1.0.0',
  summary: 'Brings Meteor namespace (Meteor.user, Meteor.settings.public etc.) directly to templates.',
  git: 'https://github.com/4commerce-technologies-AG/meteor-package-meteor-namespace-template-helper',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('underscore', 'client');
  api.use('templating', 'client');
  api.addFiles('meteor-namespace-template-helper.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('4commerce:meteor-namespace-template-helper');
});
