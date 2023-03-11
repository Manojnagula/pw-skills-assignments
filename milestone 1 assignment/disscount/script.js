let offer = () => {
  let actualPrice = prompt("Enter actual price");
  let disscountedPrice = prompt("enter disscounted price");
  let difference = actualPrice - disscountedPrice;
  let percentageDisscount = (difference / actualPrice) * 100;
    console.log("actual price is:",actualPrice);
    console.log("disscounted price is:",disscountedPrice);
    console.log("percentage of disscount is:",percentageDisscount.toFixed(2));
}
offer();