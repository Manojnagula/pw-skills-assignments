let usd = {
  pen : 10,
  pencil:5,
  bag : 20,
  lunchBox : 15
 };
 console.log("price in USD:");
 console.log(usd);

  //converting usd onbject to an array.
 let usdarr =Object.entries(usd);
 //changing price for indian rupee object by using map.
 let obj = usdarr.map(([item,price])=>[item,price*80]);
 //converting resulted array into object.
 let actualobject = Object.fromEntries(obj);
console.log("prince in INR:");
 console.log(actualobject);
