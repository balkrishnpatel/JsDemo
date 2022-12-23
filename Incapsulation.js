class Employee{
    setDetials(name,id,phoneNo){
        this.name =name;
        this.id =id;
        this .phoneNo=phoneNo;
    }
    getEmpName(){
        return this.name;
    }
    getEmpId(){
        return this.id;
    }
    getEmpPhoneNo(){
        return this.phoneNo;
    }
}
let emp =new Employee();
emp.setDetials('Krishna','1001','0733-5468');
console.log(emp.getEmpId());
console.log(emp.getEmpName());
console.log(emp.getEmpPhoneNo());