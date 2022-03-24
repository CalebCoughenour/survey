$(document).ready(function(event) {

  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const resultName = $("#usersName").val();
    const resultAnimal = $("#favoriteAnimal").val();
    const resultGender = $("input:radio[name=gender]:checked").val();
    const resultBorn = $("#born").val();
    const resultColor = $("#color").val();
    $("#nameAnswer").text(resultName);
    $("#animalAnswer").text(resultAnimal);
    $("#genderAnswer").text(resultGender);
    $("#dateAnswer").text(resultBorn);
    $("#colorAnswer").text(resultColor);
  });



});




