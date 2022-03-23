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

$("form#genderForm").submit(function(event) {
  event.preventDefault();
  const result = $("input:radio[name=gender]:checked").val();
  $("#genderAnswer").text(result);
});

$("form#dateForm").submit(function(event) {
  event.preventDefault();
  const result = $("#born").val();
  $("#dateAnswer").text(result);
});


});