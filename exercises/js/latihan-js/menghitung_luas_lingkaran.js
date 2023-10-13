//rumus: π * r * r
const pi = 22/7
let r = parseInt(prompt('Masukan jari-jari lingkaran: '))

const circle = (pi, r) => {
  console.log('Hasilnya adalah, '+  pi * r**2)
}
circle(pi, r)