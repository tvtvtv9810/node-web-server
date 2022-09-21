"use strict"
/*
 * recipe関連のservice
 */

import getCsvFileList from '../common/fileUtil.js';
/**
 * 
 * @returns 
 */
export const getRecipeList = function() {
    return getCsvFileList("\\data\\recipe\\");
}

export default getRecipeList;