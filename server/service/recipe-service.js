"use strict"
/*
 * recipe関連のservice
 */


/**
 * 
 * @returns 
 */
exports.getRecipeList = function() {
    const fileUtil = require("../common/fileUtil.js");
    return fileUtil.getCsvFileList("\\data\\recipe\\");
}