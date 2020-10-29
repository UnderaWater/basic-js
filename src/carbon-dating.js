const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(n) {
  if(typeof n == "string"){
    let number = parseFloat(n);
    if(MODERN_ACTIVITY > number && number > 0){
      return Math.ceil(Math.log(MODERN_ACTIVITY / number) * HALF_LIFE_PERIOD/0.693);
    }
  }
  return false;
};
