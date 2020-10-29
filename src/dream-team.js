const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(n) {
  if(Array.isArray(n)) {
		return n.map(e => {
      if(typeof(e) == "string") 
        return e.trim().toUpperCase()[0];}).sort().join("");
	} else {
		return false;
	}
};
