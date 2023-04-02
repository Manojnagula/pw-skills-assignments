let nums = [1,2,3,4];
function dbl(arr){
   let dbArr= arr.map(num => num*2)
    return dbArr;
}
function double(array,fn){
    console.log(fn(array));
}

double(nums,dbl);