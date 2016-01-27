Messages = new Mongo.Collection("messages");

Messages.allow({
    insert: function(userId) {
        return !!userId;
    }
});