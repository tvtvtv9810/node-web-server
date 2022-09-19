"use strict"
/*
 * recipe関連のservice
 */

const fileUtil = require("../common/fileUtil.js");

/**
 * 
 * @returns 
 */
exports.getRecipeList = function() {
    return fileUtil.getCsvFileList("\\data\\recipe\\");
}