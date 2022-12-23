let EmpDetials = function(name,age){
    this.name=name;
    this.age=age;
    this.getName=function(){
        return this.name;
    
    };
    this.getAge=function(){
        return this.age;
    };
};
let emp1 =new EmpDetials('John','45');
let emp2 =new EmpDetials('Aree','454');
console.log(emp1.getName());
console.log(emp1.getAge());
console.log(emp2.getAge());
console.log(emp2.getName());  