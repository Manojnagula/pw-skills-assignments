class employee{
    constructor(name,position,salary)
    {
        this.name=name;
        this.position=position;
        this.salary=salary;
    }
    getSalary(){
        return `The salary is ${this.salary}.`
    }
}

const emp = new employee("manoj","manager",50000);

console.log(emp.getSalary());