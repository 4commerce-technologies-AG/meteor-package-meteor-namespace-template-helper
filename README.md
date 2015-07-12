# 4commerce:meteor-namespace-template-helper

This [meteorjs](https://www.meteor.com) package brings the `Meteor` namespace into your templates.

So you do not need a number of template helpers by yourself anymore and you can use the same notation to get the Meteor state values even if you write them to javascript or template files.

### Usecase

Let's say you want to show the information about the connection status:

### Before

*mytemplate.html*:

````
<template "mytemplate">
  <span>{{show_status}}</span>
</template>
````

*mytemplate.js*:

````
Template.mytemplate.helpers({
  show_status: function() {
    return Meteor.status().status;
  }
});
````

### With this package

*mytemplate.html*:

````
<template "mytemplate">
  <span>{{Meteor.status.status}}</span>
</template>
````

That's it. The values are reactive as if you would write your own helpers.

<p></p>

### Installation

You can add this package to your meteor app like any other package from atmosphere

````
$ meteor add 4commerce:meteor-namespace-template-helper
````

### Available elements

You may address the following attributes from `Meteor` object in your templates:

1. [Meteor.isClient](http://docs.meteor.com/#/full/meteor_isclient)
2. [Meteor.isCordova](http://docs.meteor.com/#/full/meteor_iscordova)
3. [Meteor.isServer](http://docs.meteor.com/#/full/meteor_isserver)
4. [Meteor.release](http://docs.meteor.com/#/full/meteor_release)
5. [Meteor.status](http://docs.meteor.com/#/full/meteor_status)

Beside the above state attributes you also have access to the complete `Meteor.settings.public` object which is synced also between server and clients. Have a look at the special _Meteor.settings_ section in this documentation.

1. [Meteor.settings.public](http://docs.meteor.com/#/full/meteor_settings)

If you also have installed the package `accounts-base` these elements are available too:

1. [Meteor.user](http://docs.meteor.com/#/full/meteor_user)
2. [Meteor.userId](http://docs.meteor.com/#/full/meteor_userid)
3. [Meteor.users](http://docs.meteor.com/#/full/meteor_users)
4. [Meteor.loggingIn](http://docs.meteor.com/#/full/meteor_loggingin)

### Usage

*mytemplate.html*:

````
<template "mytemplate">
  <span>{{Meteor.release}}</span>
  <span>{{#if Meteor.isClient}}You are on the client{{/if}}</span>
</template>
````

<p></p>

### Meteor.settings

This [meteorjs](https://www.meteor.com) package allows you also to get access to the objects and values you have stored at Meteor.settings.public within your templates.

### Usecase for settings

You want to show the information given by your settings at your client app.

````
$ export METEOR_SETTINGS="{ public: { about_info: 'Hello World App', version: '1.0' } }"
$ meteor
````

Alternative you may use --settings option

````
$ meteor --settings mysettings.json
````

### With this package

*mytemplate.html*:

````
<template "mytemplate">
  <span>{{Meteor.settings.public.about_info}}</span>
  <span>{{Meteor.settings.public.version}}</span>
</template>
````

### Usage for settings

You may address your public settings directly within your templates by just using the same path as defined on the Meteor.settings.public element.

*mytemplate.html*:

````
<template "mytemplate">
  <span>{{Meteor.settings.public.about_info}}</span>
</template>
````

You also may address the settings values by a dotted string argument. So the next example shows equal options. Make sure that the path this time is relative with starting from `Meteor.settings.public`

*mytemplate.html*:

````
<template "mytemplate">
  <span>{{Meteor.settings.public.about_info}}</span>
  <span>{{Meteor.settings.public 'about_info'}}</span>
</template>
````

You may also address deeper elements as normal objects. Let's imaging you have the following `settings.json`

````
{
  "public": {
    "application": {
      "version": "1.0",
      "author": {
        name: "My Name",
        email: "mail-address"
      }
    }
  }
}
````

then you can get those element values in your templates by

````
<template "mytemplate">
  {{#if Meteor.settings.public.application.author}}
    <span>{{Meteor.settings.public.application.author.name}}</span>
    <span>{{Meteor.settings.public 'application.author.email'}}</span>
  {{/if}}
</template>
````

### Extended usage

For a more sophiticated usage, you even may pass another expression to get the name of the config value to show.

The following example will return either the value for `about_info` or `version` whatever the bool expression of _foo_ is:

*mytemplate.html*:

````
<template "mytemplate">
  <span>{{Meteor.settings.public what_to_show}}</span>
</template>
````

````
Template.mytemplate.helpers({
  what_to_show: function() {
    return (foo) ? "version" : "about_info"
  }
});
````

### Additional Packages

We created also a _ShortCut_ package to address the settings elements just by `pubSettings`. Please have a look at [4commerce:pubsettings-template-helper](https://github.com/4commerce-technologies-AG/meteor-package-pubsettings-template-helper) if you are interested in.

See: https://github.com/4commerce-technologies-AG/meteor-package-pubsettings-template-helper

In addition, if you are looking for an easy and highly flexible configuration management based on the NODE_ENV environment, you should have a look at the [4commerce:env-settings](https://github.com/4commerce-technologies-AG/meteor-package-env-settings) package.

See: https://github.com/4commerce-technologies-AG/meteor-package-env-settings

### Issues & help

In case of support or error please report your issue request. The issue tracker is available at: https://github.com/4commerce-technologies-AG/meteor-package-meteor-namespace-template-helper/issues

### Author & Credits

Author: [Tom Freudenberg, 4commerce technologies AG](http://about.me/tom.freudenberg)

Copyright (c) 2015 [Tom Freudenberg](http://www.4commerce.de/), [4commerce technologies AG](http://www.4commerce.de/), released under the MIT license
