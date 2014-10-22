Template.add_wall_post.events({
  'click #add-post': function () {
    Template.add_wall_post.ui.disableAddPost();
    var text = Template.add_wall_post.ui.getPostContent();
    var post = {text: text};
    Meteor.call('add_post', post, function (error, response) {
      Template.add_wall_post.ui.clearPostContent();
      Template.add_wall_post.ui.enableAddPost();
    });
  }
});

Template.add_wall_post.ui = {
  disableAddPost: function () {
    $('#add-post').addClass('disabled');
  },

  enableAddPost: function () {
    $('#add-post').removeClass('disabled');
  },

  getPostContent: function () {
    return $('#post-content').val();
  },

  clearPostContent: function () {
    $('#post-content').val('');
  }
};
