"use strict"

/**
 * mappingを追加します。
 * @param {*} app 
 */
exports.addMapping = function(app){
    addMappingTemplate(app);
    addMappingApi(app);
}

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

/**
 * API
 * @param {*} app 
 */
function addMappingApi(app) {
  const recipeApi = require("../service/recipe-service.js");
  app.get("/api/recipe-list", function(req, res, next){
    const recipeList = recipeApi.getRecipeList();
    res.json(recipeList);
    res.end();
  });
}