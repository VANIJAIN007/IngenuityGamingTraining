abstract class Person{
    //class properties
    // empCode:number
    // empName:string
    constructor(private empCode:number,private empName:string){
        console.log("constructor called");
        this.empCode=empCode;
        this.empName=empName;
    
    };
    // dispDetail=():void=>
    //     console.log(`Code :${this.empCode} Name: ${this.empName}`);
    abstract dispDetail():void
}
// let emp1=new Person(101,"vani"); //we cant create objects pf abstract class
// emp1.empCode=102
// emp1.dispDetail();

//Access Modifiers

//1.public:can be access outside
//2.private:can be access only inside class
//3:protected:can be access inside or inherited class

class Employee extends Person{
    private emplSal:number;
    constructor(code:number,name:string,salary:number){
        super(code,name);
        this.emplSal=salary;
    }
    dispSal():void{
        // super.dispDetail();
        console.log(`Salary : ${this.emplSal}`);
    
    }
    dispDetail=():void=>{
        console.log(`Code:`);
    }
}

let employee1=new Employee(103,"Rahul",5000);
employee1.dispDetail();
employee1.dispSal();

// let p1=new Person(102,"kem");
