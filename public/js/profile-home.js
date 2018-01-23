var user = {};

$.get("/session").then(function (res) {
 user = res
 console.log(user)
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
  })

})