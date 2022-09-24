$(function () {

  /**
   * paramete一覧
   * @returns paramete一覧
   */
  function getParamList() {
    const param = location.search;
    return param.replace('?', '').split('&');
  }
  
  /**
   * 
   * @param {*} paramList 
   * @param {*} paramName 
   * @returns 
   */
  function getParam(paramList, paramName) {
    const target = paramList.find(param => param.indexOf(paramName) == 0);
    return target != null ? target.replace(paramName + '=', '') : '';
  }
  
  const paramList = getParamList();
  const targetFileName = getParam(paramList, 'file-name');

  $('title').html(targetFileName);

  $('#recipe_detail .fileName').html(targetFileName);

})
