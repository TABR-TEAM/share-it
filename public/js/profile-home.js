var user = {};
var categoriesCardsDOM = $("#profile-items-own-cards")

$.get("/session").then(function (res) {
 user = res
 console.log(user)
  $("#userName").empty()
  $("#email").empty()
  $("#userName").text(user.name)
  $("#email").text(user.email)
  $.get("/api/categorie/" + user.id).then(function (response) {
    categoriesCardsDOM.empty()
    for (var i = 0; i < response.length; i++) {

      var cardDiv = $("<div class='card category-card col-md-3'> </div>");
      var imgTag = $("<img class='categories-card-image' src=" + response[i].item_image + ">")
      var cardBlockDiv = $("<div class='card-block'></div>")
      var hFourTag = $("<h4 class='card-title'> " + response[i].item_name + "</h4>")
      var pTag = $("<p class='card-text' id='categories-card-text'>Item Description: " + response[i].item_description + "  </p>")
      cardBlockDiv.append(hFourTag).append(pTag);
      cardDiv.append(imgTag).append(cardBlockDiv);

      categoriesCardsDOM.append(cardDiv);
    }
  })
})
console.log(user)

window.__theme = 'bs4';
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
});
$("#addIt").on("click", function(event){
  event.preventDefault()
  var itemName = $("#add-item-name").val().trim();
  var itemCategory = $("#add-item-category :selected").val();
  var itemDiscription = $('#add-item-description').val().trim();
  var itemImage = $('#add-item-image-link').val().trim();

  var item ={
    category: itemCategory,
    item_description: itemDiscription,
    item_image: itemImage,
    item_name: itemName,
    ProfileId: user.id,
  }
  console.log(item)
  $.post("/api/categories", item).then(function (res) {
    console.log(res)

    $.get("/api/categorie/" + user.id).then(function(response){
      categoriesCardsDOM.empty()
      for(var i = 0; i < response.length; i++){
        
        var cardDiv = $("<div class='card category-card col-md-3'> </div>");
        var imgTag = $("<img class='categories-card-image' src=" + response[i].item_image + ">")
        var cardBlockDiv = $("<div class='card-block'></div>")
        var hFourTag = $("<h4 class='card-title'> " + response[i].item_name + "</h4>")
        var pTag = $("<p class='card-text' id='categories-card-text'>Item Description: " + response[i].item_description + "  </p>")
        cardBlockDiv.append(hFourTag).append(pTag);
        cardDiv.append(imgTag).append(cardBlockDiv);
    
    categoriesCardsDOM.append(cardDiv);
    }
    })
  })
  $(function () {
    $('#add-item-modal').modal('toggle');
 });

})

