function Employee(name,age,baseSalary){
    this.name=name;
    this.age=age;
    this.baseSalary=baseSalary;
    let monthlyBonus =10;

let calculateFinalSalary=function(){
    let finalSalary = baseSalary + monthlyBonus;
    console.log(finalSalary);
}
this.getEmpDetials = function(){
    console.log('name  : '+this.name+',  age : '+this.age);
    calculateFinalSalary();
}
}
let emp1 =new Employee('John',30,10);
emp1.getEmpDetials();
