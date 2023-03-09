let button = document.getElementById("button");
function change(){
  let color = "0123456789ABCDEF";
  let picker ="";
  for(let i=0;i<6;i++)
  {
    picker+=color[Math.floor((Math.random())*16)];
  }
  document.body.style.backgroundColor = "#" + picker;
}
button.addEventListener("click",change)
