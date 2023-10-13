// Ada 3 cara untuk membuat Object //
//1. Object literal //
// const obj = {}
// obj.halo = function () {
//   console.log('halo')
// }
// obj.halo()

//2. Function declaration //
// function objectPerson(name, age, student) {
//   const person = {};
//   person.name = name
//   person.age = age;
//   person.student = student
//   return person
// }
// objectPerson('Abdul', 16, true)
// console.log(objectPerson)

//3. Constructor (ini aja yg di pakai) //
// function Person (name, age, student) {
//   this.name = name
//   this.age = age
//   this.student = student
// }

// const person = new Person('Abdul', 16, true)
// console.log(person)