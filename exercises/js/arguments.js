// arguments "variable"
// array which have value of calling send function
function arg() {
  return arguments // return the value of arguments who is locked by arg()
}
let send = arg(0,1,2, "hello", false)
console.log(send) // send the arg to arguments variable

function plus() {
  let result = 0
  for(let i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }
  return result
}

let hasil = plus(1,2,3,4,5) // first 1 + 2 = 3, 3 + 4 = 7, + 5 = 15
console.log(hasil)