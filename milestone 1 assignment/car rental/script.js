function calculateRentalCost(carType, numDays) {
  let rentalCost;

  if (carType === "Economy") {
    rentalCost = 4000;
  } else if (carType === "Midsize") {
    rentalCost = 10000;
  } else if (carType === "Luxury") {
    rentalCost = 20000;
  } else {
    throw new Error("Invalid car type");
  }

  let totalCost = rentalCost * numDays;
  return totalCost;
}

let carType = prompt("Enter the car type (Economy, Midsize, Luxury):");
let numDays = parseInt(prompt("Enter the number of days:"));

let rentalCost = calculateRentalCost(carType, numDays);

console.log(`Total rental cost for ${numDays} days of ${carType} car rental: Rs. ${rentalCost}`);
