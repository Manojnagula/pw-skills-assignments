let password = prompt("please enter your password");
let confirmPassword =prompt("please enter it again");

if(password===confirmPassword){
    console.log("password matched.loggedin successfully");  
}else{
    console.log("passwords not matched.login failed");
}
