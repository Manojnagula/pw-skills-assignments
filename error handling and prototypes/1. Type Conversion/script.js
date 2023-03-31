function convertToNumber(str) {
  const num = Number(str);
  try {
    if (isNaN(num)) {
      throw new Error("invalid number");
    }
    return num;
  } catch(err) {
    return err.message;
  }
}

console.log( convertToNumber("143"));