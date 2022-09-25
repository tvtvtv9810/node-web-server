"use strict"
/*
 * recipe関連のservice
 */
import getCsvFileNameList from '../common/fileUtil.js';

const recipeDataDir = "\\data\\recipe\\";

/**
 * recipeファイル名リスト
 * @returns ファイル名リスト
 */
const getRecipeFileNameList = function() {
  return getCsvFileNameList(recipeDataDir);
}

/**
 * recipes詳細
 * @param {*} fileName 
 * @returns 
 */
const getRecipeDetail= function(fileName) {
  return 
}

// 外部公開
export { getRecipeFileNameList, getRecipeDetail };
