"use strict"
/*
 * recipe関連のservice
 */
import { getCsvFileNameList, getCsvFileData } from '../common/fileUtil.js';

/* データパス */
const recipeDataDir = "\\data\\recipe\\";

/**
 * recipeファイル名リスト
 * @returns ファイル名リスト
 */
export const getRecipeFileNameList = function() {
  return getCsvFileNameList(recipeDataDir);
}

/**
 * recipes詳細
 * @param {*} fileName 
 * @returns 
 */
export const getRecipeDetail = function (fileName) {
  
  const data = getCsvFileData(recipeDataDir + fileName);

  console.log(data);


  return "TODO:成型して返却";
}
