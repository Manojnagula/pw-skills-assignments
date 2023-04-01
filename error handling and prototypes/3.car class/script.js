class car {
  constructor(company, model, year) {
    this.company = company;
    this.model = model;
    this.year = year;
  }
  getDescription() {
    return `this is a ${this.year} ${this.company} ${this.model}`;
  }
}

const newcar = new car("toyota", "corolla", "2022");
console.log(newcar.getDescription());
