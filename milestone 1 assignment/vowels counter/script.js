let Name = prompt("what is your name?");
let vowels = "aeiou";

let count = 0;

for(let i = 0; i<vowels.length; i++)
{
    for( let j = 0; j< Name.length; j++)
    {
        if(vowels[i]===Name[j])
        {
            count+=1;
        }
    }
}
console.log(count);