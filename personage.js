class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  myquote() {
    return `Hi, My name is ${this.name} and I am ${this.age}`;
  }
}

let myPerson = new Person('Alex', 27);
console.log(myPerson.age) // 27
console.log(myPerson.myquote()) // "Hi, my name is Alex and I'm 23