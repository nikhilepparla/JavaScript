/*
1) EveryTime newName function is called the scope of count 
is saved in first function
2) Closure will only save the scope of parent which is required not the entire scope of parent
3) Below exapmle outer fun name() will not store the saomeUselessFunction after the Outer fun Execution
*/
function name() {
    let count = 0;
    function someUseLessFunction() { };
    function first() {
        count++
        return count
    }
    return first
}
let newName = name()
console.log(newName());
console.log(newName());
console.log(newName());