console.log("Hello from home.js");

$('#homepage-categories').on('click', "#categories-card", function(event) {
  event.preventDefault();
  console.log("you clicked the button")
 console.log($(this).attr('data-hover'))
 var category = $(this).attr('data-hover')

  // on click, (from home page) go to categories page that displays the items for rent
  
    window.location = "categories/" + category
//   $.get('api/categories')
})