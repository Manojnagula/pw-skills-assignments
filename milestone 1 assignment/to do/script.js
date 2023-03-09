function addItem()
{  let act = prompt("enter an activity to do");
   let activity = document.createElement("p");
   document.body.appendChild(activity);
   activity.textContent=act;

}
let but = document.getElementById("button");
but.addEventListener("click",addItem);
