"use strict"
/*
 * recipe関連のservice
 */

import getCsvFileNameList from '../common/fileUtil.js';

/**
 * 
 * @returns 
 */
const getRecipeFileNameList = function() {
    return getCsvFileNameList("\\data\\recipe\\");
}

// 外部公開
export default getRecipeFileNameList;
