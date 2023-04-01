class person{
    constructor(Name="unknown",Age=0){
        this.Name=Name;
        this.Age=Age;
    }

    getDetails(){
        return `Name:${this.Name},Age:${this.Age}`;
    }
}

const p = new person("manoj",22);
const p2 = new person();

console.log(p.getDetails());
console.log(p2.getDetails());