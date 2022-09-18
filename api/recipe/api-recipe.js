"use strict"

const fileUtil = require("../common/fileUtil.js");

/**
 * 
 * @returns 
 */
exports.getRecipeList = function() {
    return fileUtil.getFileList(process.cwd() + "\\data\\recipe");
}