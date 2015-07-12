// Just declare an object to export some of
// the original Meteor object functions in
MeteorTemplateHelper = {}

// Register a global helper to get access
// of this internal MeteorTemplateHelper object
Template.registerHelper('Meteor', function() {
  // Check that we did not called with arguments
  if (arguments.length === 0) {
    return MeteorTemplateHelper;
  }
  else {
    throw new Meteor.Error('Meteor is only accessible as an object and can not called as a method with arguments!');
  }
});

// return state informations
MeteorTemplateHelper.isClient = function() {
  return Meteor.isClient;
}

// return state informations
MeteorTemplateHelper.isCordova = function() {
  return Meteor.isCordova;
}

// return state informations
MeteorTemplateHelper.isServer = function() {
  return Meteor.isServer;
}

// return state informations
MeteorTemplateHelper.release = function() {
  return Meteor.release;
}

// return state informations
MeteorTemplateHelper.status = function() {
  return Meteor.status();
}

// return state informations
MeteorTemplateHelper.user = function() {
  return Meteor.user();
}

// return state informations
MeteorTemplateHelper.userId = function() {
  return Meteor.userId();
}

// return state informations
MeteorTemplateHelper.users = function() {
  return Meteor.users;
}

// return state informations
MeteorTemplateHelper.loggingIn = function() {
  return Meteor.loggingIn();
}

// Give access to public settings only
MeteorTemplateHelper.settings = {
  public: function() {
    // Return the public settings if no arguments were given
    if (arguments.length === 0) {
      return Meteor.settings.public;
    }
    else
    if (arguments.length === 1) {
      // Take given parameter as string value in dotted notation
      // beginning relative from public hierachy
      var elem_ = String(arguments[0]).trim();
      // Split the dotted notation and try to localize the
      // public settings object
      return (elem_ === "") ? "" : elem_.split('.').reduce(function(obj, index) { return obj[index] }, Meteor.settings.public);
    }
    else {
      throw new Meteor.Error('Wrong number of arguments when using Meteor.settings.public as a function in your templates!');
    }
  }
}
