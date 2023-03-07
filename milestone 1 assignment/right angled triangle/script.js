let a = "*";
let n = prompt("enter any number");
for(i=n;i>=1;i--)
{
    let row = "";
    for(j=i;j>=1;j--)
    {
        row +=a;
    }
    console.log(row);
}
