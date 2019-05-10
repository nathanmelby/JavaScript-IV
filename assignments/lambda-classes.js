// CODE here for your Lambda Classes

class Person {
    constructor (properties) {
        this.name = properties.name;
        this.age = properties.age;
        this.location = properties.location;
    }

    speak() {
        `Hello my name is ${this.name}, I am from ${this.location}` ;
    }
}

class Instructor extends Person{
    constructor (instructorProps) {
        super(instructorProps)
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }

    demo() {
       return `Today we are learning about {subject}`;
    }
    grade() {
       return `${this.name} recieves a perfect score on {subject}`;
    }
}

class Student extends Instructor {
    constructor (studentProps) {
        super(studentProps)
            this.previousBackground = studentProps.previousBackground;
            this.className = studentProps.className;
            this.favSubjects = studentProps.favSubjects;
        }
    
    PRAssignment(){
      return  `${random.name} has submitted a PR for {subject}`;
    }
    sprintChallenge() {
       return  `${this.name} has begun sprint challenge on {subject}`;
    }   
}

class ProjectManagers extends Student {
    constructor (pmProps) {
        super(pmProps)
        this.gradClassName = pmProps.gradClassName;
        this.favInstructor = pmProps.favInstructor;
    }

    standUp() {
       return `${this.name} announces to {channel}, @channel standy times!`;
    }
    debugsCode() {
      return  `${this.name} debugs {student.name}'s code on {subject}`;
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const ted = new Instructor({
    name: 'Ted',
    location: 'Montana',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Manifestos',
    catchPhrase: `Boom!`
  });

  const jed = new Instructor({
    name: 'Jed',
    location: 'Beverly Hills',
    age: 76,
    favLanguage: 'English',
    specialty: 'Prospecting for Oil with a gun',
    catchPhrase: `OIL! BLACK GOLD`
  });

  const bill = new Student({
    name: 'Bill',
    location: 'Tomah',
    age: 20,
    previousBackground: 'Writer',
    className: 'UX2',
    favSubjects: ['CSS', 'HTML', 'Design']
  });

  const jill = new Student({
    name: 'Jill',
    location: 'Sparta',
    age: 21,
    previousBackground: 'Skater',
    className: 'UX6',
    favSubjects: ['CSS', 'Research', 'Design']
  });

  const cathy = new ProjectManagers({
    name: 'Cathy',
    location: 'Onalaska',
    age: 25,
    gradClassName: 'UX1',
    favInstructor: ['Jed']
  });

  const ann = new ProjectManagers({
    name: 'Ann',
    location: 'La Crosse',
    age: 26,
    gradClassName: 'Web19',
    favInstructor: ['Ted']
  });


  console.log(ann.name); //ANN
  console.log(cathy.gradClassName); // UX1
  console.log(jill.location); // Sparta
  console.log(bill.favSubjects); // CSS, HTML, Design
  console.log(jed.demo()); // 
  console.log(jill.age); // 21
  console.log(ted.grade()); 
  console.log(ted.speak()); 
  console.log(fred.catchPhrase); 