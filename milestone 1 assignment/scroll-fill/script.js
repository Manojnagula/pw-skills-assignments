let bar = document.getElementById("progress-bar");
window.addEventListener("scroll",fill);
function fill(){
  let scrollableHeight = document.body.scrollHeight-window.innerHeight;
  let presentPosition = window.pageYOffset;
  let barWidth = (presentPosition/scrollableHeight)*100;
  bar.style.width=`${barWidth}%`;
}