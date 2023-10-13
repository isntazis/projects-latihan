// rumus: L = 1/2 * a * t
function triangle(half, base, tall) {
  console.log(half * base * tall + ' cm²')
}
const half = 1/2
let base = parseInt(prompt('Masukan alas: '))
let tall = parseInt(prompt('Masukan tinggi: '))
triangle(half, base, tall)