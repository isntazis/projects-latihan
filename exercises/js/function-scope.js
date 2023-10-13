let a = 1 // global scope
function test() {
  // name conflict
  let a = 2 // function scope
}
console.log(a)