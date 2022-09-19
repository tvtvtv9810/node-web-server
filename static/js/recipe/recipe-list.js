$(function () {
    
  // $("#recipe_list").find("span").html("XXXXX");

  /**
   * 
   */
  function getRecipeFileList() {
    $.ajax({
      url: "/api/recipe-list",
      context: document.body
    }).done(function(data) {
      return data;
    }).fail(function(data) {
      console.log('Ajax fail (communication error)');
    });
  }

  const recipeFileList = getRecipeFileList();
  console.log(recipeFileList);
    
})
