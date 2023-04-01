// Create the prototype object
const Student = {
    name: '',
    printDetails() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  // Instantiate a Student object with the name "Mithun"
  const student = Object.create(Student);
  student.name = 'Mithun';
  
  // Call the printDetails method
  student.printDetails(); // Output: Hello, my name is Mithun
  