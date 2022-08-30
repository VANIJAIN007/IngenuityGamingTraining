//ES6
class Training{
    constructor(trainingName,trainingDuration,trainingStatus="online")
    {
        this.trainingName=trainingName;
        this.trainingDuration=trainingDuration;
        this.trainingStatus=trainingStatus
    }
    displayDetails(){
        console.log(`Training Name:${this.trainingName} \n TrainingDuration:${this.trainingDuration} \n TrainingStatus:${this.trainingStatus}`);
    }

}
class InCampus extends Training{
    constructor(a,b,c,d)
    {
        super(a,b,c);
        this.rollno=d;
    }
    displayDetails(){
        console.log(`Roll No : ${this.rollno}`);
        super.displayDetails();

    }
}


let stu1=new InCampus("Flutter",40,"Online",1011);
stu1.displayDetails();
// console.log(displayDetails());

// let IngenuityGaming=new Training("Development Basics",120,"Offline");
// let Dell=new Training("React",40,"Online");

// //Method Calling

// console.log(IngenuityGaming.displayDetails());
// console.log(Dell.displayDetails());