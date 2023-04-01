function numberChecker(numbers){
    return function(num){
        return numbers.includes(num);
    }
}

const arr = [1,2,3,4,5];
console.log(numberChecker(arr)(4));