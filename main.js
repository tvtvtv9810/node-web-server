"use strict";

const express = require("express");
const port = 3000;

var app = express();
// 静的ファイルの場所（express.static ミドルウェア関数）
app.use(express.static('static'));
// View EngineにEJSを指定
app.set('view engine', 'ejs');

var server = app.listen(port, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

// "/"へのGETリクエストで"views/top.ejs"を表示する。※拡張子（.ejs）は省略されていることに注意。
app.get("/", function(req, res, next){
    res.render("top", {});
});


