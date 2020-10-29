const CustomError = require("../extensions/custom-error");

module.exports = function countCats(n) {
  
  let arr = []  
for(let i = 0;i<n.length;i++){
for (j = 0; j < n[i].length; j++) {
    arr.push(n[i][j]);  
  }
}
return arr.filter(x=>x === '^^').length
};
