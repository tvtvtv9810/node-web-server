"use strict";

console.log(typeof module);

// const express = require("express");
import express from 'express';

const port = 3000;

let app = express();
// 静的ファイルの場所（express.static ミドルウェア関数）
app.use(express.static('static'));
// View EngineにEJSを指定
app.set('view engine', 'ejs');


let server = app.listen(port, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});


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
// const recipeController = require("./server/controller/recipe-controller.js");
import addMapping from './server/controller/recipe-controller.js';
addMapping(app);