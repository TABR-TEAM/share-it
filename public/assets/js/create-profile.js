console.log("yo");

$('#create-profile-button').on('click', function(event) {
  event.preventDefault();

  var name = $('#input-create-name').val().trim();
  var email = $('#input-create-email').val().trim();
  var password = $('#input-create-password').val().trim();
  var neighborhood = $('#input-create-neighborhood').val().trim();
  var city = $('#input-create-city').val().trim();
  var user = {
    name: name,
    email: email,
    password: password,
    neighborhood: neighborhood,
    city: city
  }
  console.log(user)

  $.post('api/profiles', user)
})