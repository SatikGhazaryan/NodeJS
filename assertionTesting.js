console.log("nodeJs");
let ass = require("assert");
//console.log(ass);
function sum(a, b) {
  return a + b;
}
let result = sum(1, 3);
//ass(result == 5, "Error: 1+3=4"); //AssertionError [ERR_ASSERTION]: Error: 1+3=4
//ass.equal(result, 5, "Error: 1+3=4"); // AssertionError [ERR_ASSERTION]: Error: 1+3=4
ass.equal(result, "4", "Error: 1+3=4"); //not error
ass.equal(result, "4", "Error: 1+3=4"); //not error
ass.notEqual(result, 5, "Error: 1+3=4"); //not error
ass.deepEqual(result, "4", "Error: 1+3=4"); //not error
let a = { n: 45 };
let b = { n: 45 };
console.log(a == b);
ass.deepEqual(a, b, "Error: a!=b"); //not error
