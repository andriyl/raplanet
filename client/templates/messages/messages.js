Template.messages.helpers({
    posts: function() {
        var
            locationId = Locations.findOne({place_id: Meteor.user().place_id}),

            posts = Messages.find({location_id: locationId}, {sort: {createdAt: -1}}).fetch();
        posts.map(function(post){
            post.user = Meteor.users.findOne({_id: post.user_id},{fields: {profile: 1}});
        });

        return posts;
    },
    place: function(){
        return Meteor.user().profile.place;
    }
});

Template.registerHelper('messageDate', function(date) {
    return moment(date).fromNow();
});

Template.messages.events({
    'submit': function(e){
        e.preventDefault();

        var postValue = e.target.post.value;
        if(!postValue) return false;

        Meteor.call('insertPost', postValue, function(error, result) {
            if (error) return alert(error.reason);
            e.target.post.value = '';
        });
    }
});
