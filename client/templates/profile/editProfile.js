Schema      = {};
Schema.User = new SimpleSchema({
    "profile.username": {
        type: String,
        optional: true
    },
    emails: {
        type: Array,
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    }
});

Meteor.users.attachSchema(Schema.User);
AutoForm.setDefaultTemplate("bootstrap3");