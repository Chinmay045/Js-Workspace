function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = "English";

  for (const x of [1,2,3,4,5]) {
    console.log(x);
    // code block to be executed
  }