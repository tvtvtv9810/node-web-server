"use strict"

import { getRecipeFileNameList } from "../service/recipe-service.js";

/**
 * mappingを追加します。
 * @param {*} app 
 */
export const addMapping = function(app) {
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
  
  /**
   * GET : 一覧表示画面
   */
  app.get("/recipe/recipe-detail", function(req, res, next){
    res.render("recipe/recipe-detail", {});
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
    const recipeList = getRecipeFileNameList();
    res.json(recipeList);
    res.end();
  });
  
  /**
   * recipe詳細
   */
  app.get("/api/recipe-detail", function (req, res, next) {
    // getRecipeDetail
  });

}


