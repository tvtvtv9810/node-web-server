"use strict";

const express = require("express");

const port = 3000;

let app = express();
// 静的ファイルの場所（express.static ミドルウェア関数）
app.use(express.static('static'));
// View EngineにEJSを指定
app.set('view engine', 'ejs');


/*
 *  GET : "/" 
 */
app.get("/", function (req, res, next) {
    // top.ejs
    res.render("top", {});
});

/**
 * 
 */
const recipeController = require("./server/controller/recipe-controller.js");
recipeController.addMapping(app);



let server = app.listen(port, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});



// /**
//  * GET : 一覧表示
//  */
// app.get("/recipe/recipe-list", function(req, res, next){
//     res.render("recipe/recipe-list", {});
// });

// /**
//  * GET : 
//  */
// const recipeApi = require("./server/service/recipe-service.js");
// app.get("/api/recipe-list", function(req, res, next){

//     const recipeList = recipeApi.getRecipeList();
//     res.json(recipeList);
//     res.end();
// });
