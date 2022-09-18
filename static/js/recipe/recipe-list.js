$(function () {
    
  $("#recipe_list").find("span").html("XXXXX");

  function getList() {
      
      $.ajax({
        url: "/api/recipe-list",
        context: document.body

    }).done(function(data) {

        console.log('Successful communication with API!');
        console.log('ReturnParameter:' + data['name']);

    }).fail(function(data) {
        console.log('Ajax fail (communication error)');
    });

  }

  getList();

})
