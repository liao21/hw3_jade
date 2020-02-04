// Hayden Liao

eventHandler = function() {
  // settext dropdown_label to gettext(clicked dropdown_item)
  var month = $(this).html();
  $("#dropdown_label").html(month);
}

// $(function() {
  // when dropdown_item is clicked
  $(".dropdown_item").click(eventHandler);
// });


//
// $(function() {
//   // when dropdown_item is clicked
//   $(".dropdown_item").click(function(){
//     // settext dropdown_label to gettext(clicked dropdown_item)
//       var month = $(this).html();
//       $("#dropdown_label").html(month);
//   });
// });
