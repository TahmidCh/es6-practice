class student{
    constructor(studentId,studentName){
        this.id=studentId;
        this.name=studentName;
    }
}

const student1 = new student(1,"Jessica Chan");
const student2 = new student(2,"Jacky Chan");
console.log(student1,student2);