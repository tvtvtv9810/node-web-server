"use strict"

/**
 * mappingを追加します。
 * @param {*} app 
 */
const addMapping = function (app) {
  addMappingView(app);
  addMappingApi(app);

  addMappingRecipe(app);
}


/**
 * View
 * @param {*} app 
 */
function addMappingView(app) {

  /*
  *  GET : "/" 
  */
  app.get("/", function (req, res, next) {
    // top.ejs
    res.render("top", {});
  });
}

/**
 * API
 * @param {*} app 
 */
function addMappingApi(app) {

  // 今のところなし
}

import recipeAddMapping from './recipe-controller.js'
/**
 * recipe 関連
 * @param {*} app 
 */
function addMappingRecipe(app) {
  recipeAddMapping(app);
}

// 外部公開
export default addMapping;
