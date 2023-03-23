
let numbers =[]; //declaring an array to store numbers.
while(true){
    
    let number = prompt("enter any number");
    if(number==null){ //user pressed cancel.
        break;
    }
    numbers.push(number); //pushed numbers into array.
}
function minMax(numbers){
    let min = Math.min(...numbers);
    let max =Math.max(...numbers);
    
    //creating an object
    return {
            minimum:min,
            maximum:max
            };
}
console.log(minMax(numbers));