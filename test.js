"use strict";

import { getCsvFileData }  from './server/common/fileUtil.js'

const data = getCsvFileData("\\data\\recipe\\data01.csv");

console.log(data);
