"use strict"

import { addMapping as recipeAddMapping } from './recipe-controller.js'

/**
 * mappingを追加します。
 * @param {*} app 
 */
export const addMapping = function (app) {
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

/**
 * recipe 関連
 * @param {*} app 
 */
function addMappingRecipe(app) {
  recipeAddMapping(app);
}
