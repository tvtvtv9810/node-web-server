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

  // console.log("-------------");
  // console.log(rowDataList);
  // console.log("-------------");
  // rowDataList.forEach(rowData => {
  //   rowData.test = "test_XXX";
  //   console.log(rowData['ジャンル']);
  //   console.log(rowData['誰のレシピ']);
  //   console.log(rowData['test']);
  //   console.log(rowData['x'])
  // });
  // console.log("-------------");

  rowDataList.forEach(rowData => {
    pushToList(genre, rowData["ジャンル"]);
    pushToList(whos, rowData["誰のレシピ"]);
    pushToList(mainIngredients, rowData["メイン食材"]);
    pushToList(recipeName, rowData["料理名"]);
    pushToList(ingredientsQuantity, rowData["材料の後ろの()"]);
    pushToList(ingredients, rowData["材料"]);
    pushToList(quantity, rowData["数量"]);
    pushToList(procedure, rowData["作り方"]);
    pushToList(tipsMemo, rowData["コツ・メモ"]);
  });

  return {
    genre: genre,
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

function pushToList(list, value) {
  if (value != null && value.trim().length != 0) {
    list.push(value);
  }
}