Meteor.startup(function () {
  var hipsum = Meteor.npmRequire('lorem-hipsum');
  Posts.remove({/* everything */});
  var currentTime = Date.now();
  var hipsumParams = {count: 2, units: 'sentences', format: 'plain'};
  for(var i=100; i-->0;) {
    Posts.insert({
      text: hipsum(hipsumParams),
      time: currentTime - i*1000*60,
      role: (Math.random() < 0.25) ? 'admin' : 'guest'
    });
  }
});
