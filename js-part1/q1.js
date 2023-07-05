
/*
hoisting in javascript.
*/

// in javascript hoisting works for only var as it has golbal scope. that menas this keyword can access value from any where. 

var a = b;
var b = 23;

console.log(a + b) //a being undefined + b being 23 = NaN;

var a;
var b;

a = b;
b = 23;

console.log(a + b); // 46gi
