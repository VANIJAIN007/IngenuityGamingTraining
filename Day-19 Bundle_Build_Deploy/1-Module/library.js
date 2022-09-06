 export default function(){
    console.log("This is an Important information");
 }
 export default function myMessage(){
    console.log("My function");
 }
 
 let message="This is module concepts";

 let accountNo=1223;//not use export means not sharable can be private also

 let display=(name)=>{
    return `${name},Welcome to Ingenuity Gaming!  `;
}

 class Employee{
    constructor(name,id,designation){
        this.name=name;
        this.id=id;
        this.designation=designation;
    }
    displayDetails(){
        console.log(`Employee name  : ${this.name}\n Employee Id:${this.id}\n Employee Designation :${this.designation}`);
    }
}

export{message,display,Employee};