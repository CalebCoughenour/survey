$(document).ready(function() {

$("form#name").submit(function(event) {
  event.preventDefault();
  const result = $("#usersName").val();
  $("#nameAnswer").text(result);
});




});