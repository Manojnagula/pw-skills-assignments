function getPerson(person){
    try{
        
    if(typeof person !== "object" || !person.name || !person.age)
    {
        throw new Error("invalid parameter type");
    }
    return `name : ${person.name}, age : ${person.age}`;

    }catch(error){
        return error.message;
    }
}

console.log(getPerson(
    {
        name:"manoj",
        age : 389
    }
));