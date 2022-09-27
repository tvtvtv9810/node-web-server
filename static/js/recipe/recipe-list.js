$(function () {


  /**
   * 
   * @param {*} f 
   */
  function getRecipeFileLNameist(f) {
    $.ajax({
      async : false,
      type:"get",
      url: "/api/recipe-file-name-list",
      dataType: "JSON",
      context: document.body
    }).done(function (data) {
      console.log(data);
      f(data);
      // return data;
    }).fail(function(data) {
      console.log('Ajax fail (communication error)');
      console.log(data);
    });
  }

  /**
   * 
   * @param {*} fileNameList 
   */
  function drawList(fileNameList) {
    const $target = $("#recipe_list .recipe_list ul");
    $target.empty();

    fileNameList.forEach(fileName => {
      // console.log(element);
      $target.append(
        `
        <li><a href="./recipe-detail?file_name=${fileName}">${fileName}</a></li>
        `)
    });

  }

  getRecipeFileLNameist(drawList);
    
})
