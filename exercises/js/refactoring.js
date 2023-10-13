// refactoring
// 1.Readability
// 2.DRY (Don't repeat yourself)
// 3.Testability
// 4.Performance
// 5.Maintainability
function plusTwoVolume(a, b) {
  return a + b
}
let result = plusTwoVolume(8 ** 3, 3 ** 3)
console.log(result)

function fullName(fn, ln) {
  return fn + " " +ln
}
console.log(fullName('Abdul','Azis'))