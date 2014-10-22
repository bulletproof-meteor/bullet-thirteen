Template.wall_post.helpers({
  styles: function () {
    var styles = [];
    if(this.role === 'admin')
      styles.push('inverted');
    if(this._status === 'pending')
      styles.push('pending');
    return styles.join(' ');
  }
});
