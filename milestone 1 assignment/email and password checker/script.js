function submit() {
  let res = document.getElementById("result");
  let verify1 = "";
  let verify2 = "";
  // creating condition for email.
  let E = document.getElementById("email");
  let e = E.value;
  for (let i = 0; i < e.length; i++) {
    if (e[i] === "@") {
      verify1 = "ok";
    } 
  }
  if(verify1 !== "ok")
  {
    res.textContent = "invalid email or password";
    res.style.color = "red";
    res.style.fontSize = "15px";
    return;
  }

  // creating condition for password.
  let P = document.getElementById("pass");
  let pass = P.value;
  if (pass.length >= 8) {
    verify2 = "ok";
  } else {
    res.textContent = "invalid email or password";
    res.style.color = "red";
    res.style.fontSize = "15px";
    return;
  }

  // for valid credentials.
  res.textContent = "valid email and password";
  res.style.color = "green";
  res.style.fontSize = "15px";
}
let but = document.getElementById("button");
but.addEventListener("click", submit);
