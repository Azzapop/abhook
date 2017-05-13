$(document).ready(function() {
  $("#enquiry-form").on('click', '.dismiss', function() {
    $(this).closest("#note").fadeOut(500, function() {
      $(this).remove();
    });
  });
});
