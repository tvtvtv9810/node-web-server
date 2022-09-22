$(function () {

  /**
   * 
   */
  function getRecipeFileList() {
    $.ajax({
      type:"get",
      url: "/api/recipe-file-name-list",
      dataType: "JSON",
      context: document.body
    }).done(function (data) {
      console.log(data);
      return data;
    }).fail(function(data) {
      console.log('Ajax fail (communication error)');
      console.log(data);
    });
  }

  const recipeFileList = getRecipeFileList();
  console.log(recipeFileList);
    
})
