"use strict"

/**
 * mappingを追加します。
 * @param {*} app 
 */
 export const addMapping = function(app) {
    addMappingTemplate(app);
    addMappingApi(app);
}

export default addMapping;

/**
 * View
 * @param {*} app 
 */
function addMappingTemplate(app) {
    
  /**
   * GET : 一覧表示画面
   */
  app.get("/recipe/recipe-list", function(req, res, next){
    res.render("recipe/recipe-list", {});
  });
}

import recipeApi from "../service/recipe-service.js";
/**
 * API
 * @param {*} app 
 */
function addMappingApi(app) {

  /**
   * 
   */
  app.get("/api/recipe-list", function(req, res, next){
    const recipeList = recipeApi.getRecipeList();
    res.json(recipeList);
    res.end();
  });
  }
