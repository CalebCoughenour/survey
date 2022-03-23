$(document).ready(function() {

$("form#name").submit(function(event) {
  event.preventDefault();
  const result = $("#usersName").val();
  $("#nameAnswer").text(result);
});

$("form#animal").submit(function(event) {
  event.preventDefault();
  const result = $("#favoriteAnimal").val();
  $("#animalAnswer").text(result);
});


});