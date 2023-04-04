function ageInDays(person){
    const fullName = person.firstName + " " + person.lastName;
    const ageindays = person.age*365;

    return function(){
        console.log(`the persoon's full name is ${fullName} and their age in days is ${ageindays}.`);
    }
}
const person = {
    firstName: 'chandu',
    lastName: 'kannam',
    age: 20
};
const logAgeInDays = ageInDays(person);
logAgeInDays();