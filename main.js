"use strict";

import express from 'express';
import { addMapping } from './server/controller/main-controller.js'

const port = 3000;

let app = express();
// 静的ファイルの場所（express.static ミドルウェア関数） 
app.use(express.static('static'));
// View EngineにEJSを指定
app.set('view engine', 'ejs');

// Mapping
addMapping(app);

// server実行
let server = app.listen(port, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});
