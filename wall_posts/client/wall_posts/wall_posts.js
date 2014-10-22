Session.set('count', 4);

Template.wall_posts.rendered = function () {
  this.autorun(function () {
    var count = Session.get('count');
    Template.wall_posts.ui.disableLoadMore();
    Meteor.subscribe('wall_posts', count, function () {
      Template.wall_posts.ui.enableLoadMore();
    });
  });
};

Template.wall_posts.events({
  'click #load-more': function () {
    var count = Session.get('count');
    Session.set('count', count + 4);
  }
});

Template.wall_posts.helpers({
  posts: function () {
    var count = Session.get('count');
    return Posts.find({}, {sort: {time: -1}, limit: count});
  }
});

Template.wall_posts.ui = {
  disableLoadMore: function () {
    var $loadMore = $('#load-more');
    $loadMore.attr('disabled', 'disabled');
  },

  enableLoadMore: function () {
    var $loadMore = $('#load-more');
    $loadMore.removeAttr('disabled');
  }
};
