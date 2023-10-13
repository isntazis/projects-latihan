// object literal
// const orang = {
//   nama: 'Azis',
//   energi: 10,
//   makan: function(porsi) {
//     this.energi += porsi
//   },
//   main: function(jam) {
//     this.energi -= jam
//   }
// }

// function declaration

// const methodOrang = { //methodOrang response to Object.create()
//   makan: function(porsi) {
//     this.energi += porsi
//     console.log(`Halo ${this.nama} selamat makan!`)
//   },
//   main: function(jam) {
//     this.energi -= jam
//     console.log(`Halo ${this.nama} selamat main!`)
//   },
//   tidur: function(jam) {
//     this.energi += jam * 2
//     console.log(`Halo ${this.nama} selamat tidur!`)
//   }
// }

// function orang(nama, energi) {
//   let org = Object.create(methodOrang) // request from methodOrang
//   org.nama = nama
//   org.energi = energi
//   org.makan = function(porsi) {
//     this.energi += porsi
//   }
//   org.main = function(jam) {
//     this.energi -= jam
//   }
//   return org
// }

// let azis = orang('Azis', 15)

// constructor function

// function Orang(nama, energi) {
//   this.nama = nama
//   this.energi = energi
//   this.makan = function(porsi) {
//     this.energi += porsi
//     console.log(`Halo ${this.nama}, selamat makan!`)
//   }
//   this.main = function(jam) {
//     this.energi -= jam
//     console.log(`Halo ${this.nama}, selamat main!`)
//   }
//   this.tidur = function(jam) {
//     this.energi += jam * 2
//   console.log(`Halo ${this.nama}, selamat tidur!`)
//   }
// }

// const azis = new Orang('Azis', 13)