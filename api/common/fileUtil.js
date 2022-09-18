var fs = require('fs');

/**
 * ファイル一覧
 * @param {*} dirPath ディレクトリパス
 * @returns ファイル一覧
 */
exports.getFileList = function(dirPath){

    fs.readdir(dirPath, function(err, files){
        if (err) throw err;
        var fileList = files.filter(function(file){
            return fs.statSync(file).isFile() && /.*\.csv$/.test(file); //絞り込み
        })
        // console.log(fileList);
        return fileList;
    });
}