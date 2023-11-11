
class Student{
  
    constructor(n, a, r){
      this.name = n;
      this.age = a;
      this.rollNo = r;
    }
    
    getDetails(){
      console.log(`The name of student is ${this.name} and age is ${this.age} and roll No is ${this.rollNo}`)
    }
  }
  
  var student1 = new Student('Jeevendra', 29, 1234)
  student1.getDetails()
  
  var student1 = new Student('John', 23, 4567)
  student1.getDetails()
  