Template.postsList.helpers({
  posts: function() {
    return Posts.find();
  }
});

Template.postsList.rendered = function() {
  $('.grid').imagesLoaded(function(){
    //images have loaded
    //use the Packery jquery plugin
    $('.grid').packery({
      //options
      itemSelector: '.item',
      gutter: 10
    });
  });
};
