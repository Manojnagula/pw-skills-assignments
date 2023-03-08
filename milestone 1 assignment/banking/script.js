let acc ={
    Name : "manoj",
    balanace:""
};
function account(acc){
    return acc;
}
// deposit code
function deposit(){
    let dep = prompt("enter deposit amount");
    acc.balanace+=Number(dep);
    console.log("deposited amount",dep)
    console.log(account(acc));
}
// withdracode
function withdraw(){
    let With = prompt("enter wuthdrawl amount");
    acc.balanace-=Number(With);
    console.log("withdrawl amount",With)
    console.log(account(acc));
}
let d = document.getElementById("Deposit");
let w = document.getElementById("Withdraw");

d.addEventListener("click",deposit);
w.addEventListener("click",withdraw);