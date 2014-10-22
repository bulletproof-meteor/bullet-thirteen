Meteor.methods({
  'add_post': function (post) {
    _delay(5*1000);
    if(post.text === 'Please throw an error') {
      throw new Meteor.Error('You asked me to throw an error');
    }

    post.time = Date.now();
    post.role = 'guest';
    Posts.insert(post);
  }
});


function _delay (millis) {
  var Future = Npm.require('fibers/future');
  var future = new Future();
  Meteor.setTimeout(function() {
    future.return();
  }, millis);
  future.wait();
}
