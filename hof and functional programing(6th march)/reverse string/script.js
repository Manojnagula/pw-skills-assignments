let input = prompt("enter a string");
function test(){
    let char = input.split("");
    let rev = char.reverse();
    let reversed = rev.join("");
    console.log(reversed);
}
setTimeout(test,2000);