//1. function declaration
function test(name) {
  return name
}

test(prompt('Add your name: '))

//2. function expression
const addName = function(name) {
  return name
}
addName(prompt('Add your name: '))

//3. arrow function
const fullName = (firstname, lastname) => {
  return firstname +" "+ lastname
}

const result = fullName('Abdul', 'Azis')
console.log(result)