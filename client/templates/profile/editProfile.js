Schema      = {};
Schema.User = new SimpleSchema({
    "profile.username": {
        type: String,
        optional: true
    },
    emails: {
        type: Array,
        optional: true,
        minCount: 1
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "profile.place": {
        type: String,
        label: "Location",
        autoform: {
            type: "placecomplete",
            placecompleteOptions: {
                allowClear: true,
                requestParams: function() {
                    var result = {
                        types: ['(cities)']
                    };
                    return result;
                },
                selectDetails: function(placeResult) {
                    $("input[name='place_id']").val(placeResult.place_id);
                    return null;
                }
            }
        }
    },
    "place_id": {
        type: String,
        autoform: {
            type: "hidden",
            label: false
        }
    }
});

Meteor.users.attachSchema(Schema.User);