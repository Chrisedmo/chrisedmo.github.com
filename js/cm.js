$('.social-share a').hover (
  function () {
    $(".main-footer").css('background-color', $(this).attr("data-color"));
   },
  function () {
    $(".main-footer").css('background-color', '#ddd');
   }
 );


