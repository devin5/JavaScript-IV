// CODE here for your Lambda Classes

/* Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
*/
class Person {
      constructor(aPerson){
            this.name = aPerson.name; 
            this.age = aPerson.age; 
            this.location = aPerson.location; 
      }
      speak(){
            console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
      }
}

/*Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Person{
      constructor (aInstructor){
            super(aInstructor);
            this.specialty = aInstructor.speciality; 
            this.favLanguage = aInstructor.favLanguage; 
            this.catchPhrase = aInstructor.catchPhrase; 
      }
      demo(aSubject){
            console.log(`Today we are learning about ${aSubject}.`);
      }
      grade(aStudent, aSubject){
            console.log(`${aStudent.name} receives a perfect score on ${aSubject}.`);
      }
}

/*
#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
*/
class Student extends Person{
      constructor(aStudent){
            super(aStudent);
            this.previousBackground = aStudent.previousBackground; 
            this.className = aStudent.className; 
            this.favSubjects = aStudent.favSubjects; 
      }
      listSubjects(){
            for(var i = 0; i < this.favSubjects.length; i++){
                  console.log(this.favSubjects[i]);
            }
      }
      PRAssignment(aSubject){
            console.log(`${this.name} has submitted a PR for ${aSubject}`);
      }
      sprintChallenge(aSubject){
            console.log(`${this.name} has begun sprint challenge on ${aSubject}`); 
      }
}

/*
#### Project Manager

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
*/

class ProjectMangaer extends Instructor{
      constructor(aManager){
            super(aManager);
            this.gradClassName = aManager.gradClassName;
            this.favInstructor = aManager.favInstructor;
      }

      standUp(slack){
            console.log(`${this.name}  announces to ${slack}, @channel standy times!​​​​​`)
      }
      debugsCode(aStudent, subject){
            console.log(`${this.name} debugs ${aStudent.name}'s code on ${subject}`)
      }

}

/*
* **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. 
*/

var person1 = new Person({
      name : "Bob", 
      age : 12,
      location : "Dallas, TX", 
});

var person2 = new Person({
      name : "Steve", 
      age : 21,
      location : "Round Rock, TX", 
});

var teacher = new Instructor({
      name : "Mrs. Apple", 
      age : 55,
      location : "Austin, TX", 
      specialty : "Redux",
      favLanguage : "JavaScript", 
      catchPhrase : "Hello"
});
// teacher.speak(); 
// teacher.demo("Math"); 

var teacher2 = new Instructor({
      name : "Mr. Apple", 
      age : 56,
      location : "The Middle of Nowhere", 
      specialty : "Ghost Hunting",
      favLanguage : "C++", 
      catchPhrase : "I do not exist."
});
// teacher2.speak(); 
// teacher2.demo("Geography"); 

var student = new Student({
      name : "Todd Nancy", 
      age : 16,
      location : "Houston, TX", 
      previousBackground :"Biology",
      className : "Seahawks",
      favSubjects : ["recess", "lunch", "gym", "detention"],
});
var student2 = new Student({
      name : "Bob Joe", 
      age : 99,
      location : "Florida", 
      previousBackground :"History of Magic",
      className : "CS9999",
      favSubjects : ["nap", "science", "math", "history"],
});
// student.PRAssignment("lunch");
// student.sprintChallenge("recess");

var pm1 = new ProjectMangaer({
      name : "Ted", 
      age : 43,
      location : "Hogwarts",
      gradClassName: "CS5555", 
      favInstructor: "Dumbledore"
});
var pm2 = new ProjectMangaer({
      name : "Ron", 
      age : 42,
      location : "Ohio",
      gradClassName: "CS6666", 
      favInstructor: "Myself"
});

person1.speak(); 
person2.speak(); 
teacher.speak(); 
teacher.demo("Math"); 
teacher2.speak(); 
teacher2.demo("Geography"); 
teacher2.grade(student, "Science"); 
student.PRAssignment("lunch");
student.sprintChallenge("recess");
student2.speak(); 
student2.listSubjects(); 
pm1.speak(); 
pm1.standUp("TheSlackChannel"); 
pm2.speak(); 
pm2.debugsCode(student, "Science"); 
