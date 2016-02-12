Template.messages.helpers({
    posts: function() {
        var posts = [], user = Meteor.user();

        if(user && user.place_id) {
            var locationId = Locations.findOne({place_id: user.place_id})._id;

            posts = Messages.find({location_id: locationId}, {sort: {createdAt: -1}}).fetch();
            posts.map(function (post) {
                post.user = Meteor.users.findOne({_id: post.user_id}, {fields: {profile: 1}});
            });
        }

        return posts;
    },
    place: function(){
        return Meteor.user() && Meteor.user().profile.place;
    },
    isLocation: function() {
        return !(Meteor.user() && Meteor.user().place_id);
    },
    avatarColor: function(){
        return "#a7b249";
    }
});

Template.registerHelper('messageDate', function(date) {
    return moment(date).fromNow();
});

Template.messages.events({
    'submit': function(e){
        e.preventDefault();

        var postValue = e.target.post.value;
        if(!(postValue && Meteor.user().place_id)) return false;

        Meteor.call('insertPost', postValue, function(error, result) {
            if (error) throw new Meteor.Error(500, error.reason);

            e.target.post.value = '';
        });
    }
});
