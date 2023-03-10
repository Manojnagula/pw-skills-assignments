let picture = document.getElementById("pic");

document.addEventListener("keydown",move)

let x=0;
let y=0;

function move(manoj){

  if(manoj.code === "ArrowUp")
  {
      y-=10;
  }
  else if(manoj.code === "ArrowDown")
  {
      y+=10;
  }
  else if(manoj.code === "ArrowLeft")
  {
      x-=10;
  }
 else if(manoj.code === "ArrowRight")
  {
      x+=10;
  }
  picture.style.transform=`translate(${x}px , ${y}px)`;
}
