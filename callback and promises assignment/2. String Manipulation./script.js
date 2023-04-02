function manipulateString(str,logString){
    let manipulated = str.toUpperCase();
    return logString(manipulated);
}

function manipulatedOne(string){
console.log(`The mannipulated string is:${string}`);
}
manipulateString("hello, world",manipulatedOne);