Posts = new Mongo.Collection('posts');

Posts.allow({
  insert: function(userId, doc) {
    //only allow posting if you are logged in
    return !!userId;
  },
    update: function(userId, doc) {
      //only allow editing if you are logged in
    }
});
