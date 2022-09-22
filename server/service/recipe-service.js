"use strict"
/*
 * recipe関連のservice
 */

import getCsvFileList from '../common/fileUtil.js';

/**
 * 
 * @returns 
 */
const getRecipeList = function() {
    return getCsvFileList("\\data\\recipe\\");
}

// 外部公開
export default getRecipeList;
