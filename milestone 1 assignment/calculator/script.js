let num1 = prompt("enter first number");
let num2 = prompt("enter second number");
let operator =prompt("enter operator");
let result;

switch(operator)
{
    case "+":{
        console.log("result is");
        console.log(resslut=num1+num2);
        break;
    }
    case "-":{
        console.log("result is");
        console.log(result=num1-num2);
        break;
    }
    case "*":{
        console.log("result is");
        console.log(result=num1*num2);
        break;
    }
    case "/":{
        console.log("result is");
        console.log(result=num1/num2);
        break;
    }
    default:{
        console.log("invalid operator");
    }
}