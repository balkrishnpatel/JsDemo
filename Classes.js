class Employee{
    /*setDetials(name,id){
        this.name=name;
        this.id=id;
    }*/
    constructor(name,id){
        this.name=name;
        this.id =id;
    }
}
let emp1 =new Employee('Krishna','1001');
//emp1.setDetials('Krishna','1001')
console.log(emp1.name);
console.log(emp1.id)