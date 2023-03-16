let linkedinRegExp = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

let button = document.getElementById("button");
button.addEventListener("click", url);

function url() {
  let link = prompt("Enter LinkedIn URL:");
  if (linkedinRegExp.test(link)) {
    console.log("Valid LinkedIn URL");
  } else {
    console.log("Invalid LinkedIn URL");
  }
}

