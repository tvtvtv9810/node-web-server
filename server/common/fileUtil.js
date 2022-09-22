"use strict"
/*
 * ファイル関連のUtil
 */
export default getCsvFileList;

import fs from 'fs';

/**
 * CSVファイル一覧
 * @param {*} dirPath ディレクトリ（rootからの）パス
 * @returns CSVファイル一覧
 */
function getCsvFileList(dirPath) {

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
  fs.readdir(targetDirFullPath, function(err, files){ 
    if (err) { throw err; }

    console.log(files);
    // フィルタ
    var fileList = files.filter(function(file){
      return fs.statSync(targetDirFullPath + "\\"+ file).isFile() && filterFileExtensionRegex.test(file); //絞り込み
    })
    return fileList;
  });
}
