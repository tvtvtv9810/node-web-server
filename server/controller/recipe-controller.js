"use strict"

import { getRecipeFileNameList, getRecipeDetail } from "../service/recipe-service.js";

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
  app.get("/recipe/recipe-detail", function (req, res, next) {
    // クエリパラメータ取得
    const fileName = req.query.file_name;

    const recipeData = getRecipeDetail(fileName);

    console.log(recipeData);

    res.render("recipe/recipe-detail",
      {
        fileName: fileName,
        test: "testあああ"
      });
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
    // ..TODO...ajaxで取得しなくてもよいか..
  });

}


