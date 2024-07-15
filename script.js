/*TODO: Higher Order Function
-> Function that takes one or more functions as arguments, or returns a function as its result
*/

//Example 1
function someRFunction() {
    function letsprint() { console.log("Say Hello"); }
    return letsprint
}
let name = someRFunction()
console.log(name);//Output :- [Function: letsprint]

//Exapmle 2
function someRFunction2() {
    function letsprint() { console.log("Say Hello"); }
    return letsprint
}
let name2 = someRFunction2()
console.log(name2()); // Output :- Say Hello