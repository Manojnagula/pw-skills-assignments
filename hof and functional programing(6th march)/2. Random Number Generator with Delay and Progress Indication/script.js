const delay = 3;
let remainingTime = delay;

function repeat(){
  console.log(`remaining time is ${remainingTime} sec...`);
  remainingTime--;
  if(remainingTime===0)
  {
    console.log(`random number is:`,Math.floor(Math.random()*100));
    clearInterval(interval);

  }
}
let interval = setInterval(repeat,1000)