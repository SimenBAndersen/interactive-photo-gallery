$(document).ready(function() {
  $('.photo-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true},
    image: {
      titleSrc: 'caption'
    }
  });
});
