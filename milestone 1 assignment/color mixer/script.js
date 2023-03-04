let color1 = prompt("enter a color");
let color2 = prompt("enter another color");
console.log(color1+color2);
switch(color1+color2)
{
    case "redblue":
    case "bluered":
        {
            console.log("purple");
        }
        break;
    case "redyellow":
    case "yellowred":
        {
            console.log("orange");
        }
        break;
    case "blueyellow":
    case "yellowblue":
        {
            console.log("green");
        }
        break;
    default:{
        console.log("invalid color combination");
            }
            break;
}