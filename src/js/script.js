$(document).ready(function() {

  // All anchor-tags/photos
  var photos = $('a');

  // Lightbox plugin
  $('.photo-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true},
    image: {
      titleSrc: 'data-caption'
    }
  });

  // Search for part of photos' caption
  // Hide non-matching photos
  // Show matching photos
  $('#search').on('input', function(e) {

    // Input value
    var search = e.target.value.toLowerCase();

    for (var i = 0; i < photos.length; i++) {
      var caption = photos[i].getAttribute('data-caption');

      // Not a match = hide photo
      if (!caption.includes(search)) {
        photos.eq(i).hide();
      }
      // Match = show photos
      if (caption.includes(search)) {
        photos.eq(i).show();
      }
    }
  });

});
