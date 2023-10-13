// using constructor function

function Orang(nama, energi) {
  Orang = Object.create(Orang.prototype)
  this.nama = nama
  this.energi = energi
}
const azis = new Orang('Azis', 10)

//using class

// class Orang{
//   constructor(nama, energi) {
//     this.nama = nama
//     this.energi = energi
//   }
//   makan(porsi) {
//     this.energi += porsi
//     console.log(`Halo ${this.nama} selamat makan!`)
//   }
//   main(jam) {
//     this.energi -= jam
//     console.log(`Halo ${this.nama} selamat main!`)
//   }
// }
// const azis = new Orang('Azis', 10)