function addName() {
  for(let i = 0; i < arguments.length; i++) {
    console.log(`Hello bro! : \n
    ${arguments[i], arguments[i]}`)
  }
}

const name = prompt('Add your name: ')
const age = prompt('Add your age: ')
addName(name, age)