let person = {
  Name : "manoj",
  age : 22,
  address : {
    street : "xyzz area",
    city : "hyderabad",
    state : "telangana"
  }
};

//............

function extractingDetails(personObj)
{
  let {Name, address:{street}} = personObj;
  return {Name, street}
}

console.log(extractingDetails(person));