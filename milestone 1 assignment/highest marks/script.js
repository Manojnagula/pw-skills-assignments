let marks = [100,2,9,4,7];
let highestmarks = 0;

for(let i=0;i<=5;i++)
{
    // using ternary
    highestmarks<marks[i]?highestmarks=marks[i]:highestmarks=highestmarks;
}
console.log("The highest marks are:");
console.log(highestmarks);
