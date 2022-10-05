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
  
  const rowDataList = getCsvFileData(recipeDataDir + fileName);
  return convert(rowDataList);
}

function convert(rowDataList) {

  const genre = [];
  const whos = [];
  const mainIngredients = [];
  const recipeName = [];
  const ingredients = [];
  const ingredientsQuantity = [];
  const quantity = [];
  const procedure = [];
  const tipsMemo = [];


  rowDataList.forEach(rowData => {
    genre.push(rowData["ジャンル"]);
    whos.push(rowData["誰のレシピ"]);
    mainIngredients.push(rowData["メイン食材"]);
    recipeName.push(rowData["料理名"]);
    ingredientsQuantity.push(rowData["材料の後ろの()"]);
    ingredients.push(rowData["材料"]);
    quantity.push(rowData["数量"]);
    procedure.push(rowData["作り方"]);
    tipsMemo.push(rowData["コツ・メモ"]);
  });

  return {
    genre: genre[0],
    whos: whos[0],
    mainIngredients: mainIngredients,
    recipeName: recipeName[0],
    ingredientsQuantity: ingredientsQuantity[0],
    ingredients: ingredients,
    quantity: quantity, 
    procedure: procedure,
    tipsMemo: tipsMemo,


  }
}
