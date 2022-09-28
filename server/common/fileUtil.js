"use strict"
/*
 * ファイル関連のUtil
 */
import fs from 'fs';
// オブジェクトの分割代入：const parse = require('csv-parse/sync').parse;
import { parse } from 'csv-parse/sync';

/**
 * CSVファイル名一覧
 * @param {*} dirPath ディレクトリ（rootからの）パス
 * @returns CSVファイル名一覧
 */
export function getCsvFileNameList(dirPath) {

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
 * CSVファイル内のデータ
 * （※１行分データ配列×行数分配列）
 * @param {*} filePath ディレクトリ（rootからの）パス
 * @returns CSVファイルデータ
 */
export function getCsvFileData(filePath) {
  // ルートパス
  const rootPath = process.cwd();
  // 対象ディレクトリパス
  const targetFileFullPath = rootPath + filePath;

  // CSVファイル読込
  const buffer = fs.readFileSync(targetFileFullPath);
    // パース
  const options = {
    escape: '\\',
    // from_line: 2,
    columns: true,
  };
  const { ok, err } = canParse(buffer, options);
  
  if (ok) {
    const rows = parse(buffer, options);
    // console.info(rows);
    return rows;
  } else {
    console.error(err);
  }
}

/**
 * CSVデータをパース
 * @param {*} data データ
 * @param {*} options オプション
 * @returns パース結果
 */
function canParse (data, options) {
 let ok, message

  try {
    parse(data, options)
    return {ok: true, err: null}
  } catch (err) {
    return {ok: false, err}
  }
}
