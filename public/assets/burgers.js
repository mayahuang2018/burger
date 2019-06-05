$(function() {

  //click "submit" button to create a new burger.
  $("#submit").on("click", function(event) {
    
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log('button clicked')
    
    var newBurger = {
      burger_name: $("#bName").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(newBurger) {
        console.log("created a new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //click "Devour me" button
    $(".btn-small").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = {
        devoured: "true"
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("Updated burger status", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });  