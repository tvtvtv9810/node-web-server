"use strict"

import getRecipeList from "../service/recipe-service.js";

/**
 * mappingを追加します。
 * @param {*} app 
 */
const addMapping = function(app) {
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
  
  /**
   * recipe一覧取得
   */
  app.get("/api/recipe-file-name-list", function(req, res, next){
    const recipeList = getRecipeList();
    res.json(recipeList);
    res.end();
  });
  
}

// 外部公開
export default addMapping;
