class Person {
  constructor({ age, sex, height, favoriteColor = null, name }) {
    this.age = age;
    this.name = name;
    this.sex = sex;
    this.height = height;
    this.favoriteColor = favoriteColor;

    Person.numberofPeople++;
  }
  static numberofPeople = 0;
  getPerson() {
    return {
      name: this.name,
      age: this.age,
      sex: this.sex,
      height: this.height,
      favoriteColor: this.favoriteColor,
    };
  }
}

const steve = new Person({
  name: "Steve Correa",
  age: 28,
  sex: "Male",
  height: "5'10",
  favoriteColor: "Red",
});

console.log(steve);
console.log(Person.numberofPeople);

// Inhertance. Male uses and takes Person constructor and instance methods!!!
class Male extends Person {}

const higgy = new Male({
  name: "Ryan Higgins",
  age: 30,
  sex: "Male",
  height: "5'7",
  favoriteColor: "blue",
});

console.log(higgy.getPerson(), Person.numberofPeople);
