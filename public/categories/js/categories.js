console.log("Hello from categories.js");



var categoriesCardsDOM = $("#categories-cards")

  console.log(window.location.pathname.slice(12, 100).trim())
  var choosenCategory = window.location.pathname.slice(12, 100).trim()
   // on click, (from home page) go to categories page that displays the items for rent

    $.get("/api/categories/" + choosenCategory).then(function(response){
        console.log(response)
        

    // <div class="card category-card col-md-3">
    //      <img class="categories-card-image" src="..\assets\images\placeholder-image.png">
    //     <div class="card-block">
    //         <h4 class="card-title">Item Name</h4>
    //         <p class="card-text" id="categories-card-text">
    //             Owner: <br>
    //             Location:
    //         </p>
    //     </div>
    // </div>
    // var cardDiv = $("<div class='card category-card col-md-3'> </div>");
    // var imgTag = $("<img class='categories-card-image' src=" + response[0].item_image + ">")
    // var cardBlockDiv = $("<div class='card-block'></div>")
    // var hFourTag = $("<h4 class='card-title'> " + response[0].item_name + "</h4>")
    // var pTag = $("<p class='card-text' id='categories-card-text'>Item Description: " + response[0].item_description + "  </p>")
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

});

    $('#borrow_it').on('click', function(event) {
        event.preventDefault();
        
        console.log("Button clicked");
    
        $.post('/api/categories').then(function (params) {
            window.location.href = '/profile-home'
        })
        $(function () {
            $('#add-item-modal').modal('toggle');
         });
    });
    
  