class Person {
    constructor(name, surname, age) {
      this.name = name;
      this.surname = surname;
      this.age = age;
    }
  
    logBirthYear() {
      const currentYear = new Date().getFullYear();
      console.log(currentYear - this.age);
    }
  }
  
  
  const person = new Person('Kamil', 'Agayev', 25);
  person.logBirthYear(); 
  