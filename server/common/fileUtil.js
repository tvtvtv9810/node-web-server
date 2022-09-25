"use strict"
/*
 * ファイル関連のUtil
 */
export default getCsvFileNameList;

import fs from 'fs';

/**
 * CSVファイル名一覧
 * @param {*} dirPath ディレクトリ（rootからの）パス
 * @returns CSVファイル名一覧
 */
function getCsvFileNameList(dirPath) {

  // ルートパス
  const rootPath = process.cwd();
  // 対象ディレクトリパス
  const targetDirFullPath = rootPath + dirPath;

  console.log("ファイル一覧取得：" + dirPath);
  console.log("ファイル一覧取得：フルパス：" + targetDirFullPath);

  // フィルタ：以外を除外する拡張子
  const filterFileExtension = "csv";
  const filterFileExtensionRegex = new  RegExp(".*\." + filterFileExtension + "$");

  // ディレクトリ：ファイルの一覧読込
  return fs.readdirSync(targetDirFullPath, function(err, files){ 
    if (err) { throw err; }

    console.log(files);
    // フィルタ
    var fileList = files.filter(function(file){
      return fs.statSync(targetDirFullPath + "\\"+ file).isFile() && filterFileExtensionRegex.test(file); //絞り込み
    })
    return fileList;
  });
}

/**
 * 
 * @param {*} path 
 */
function getCsvFileData(path) {
  // todo:
}