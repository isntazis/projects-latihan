// rumus: p * l
const rectangle = function(tall, wide) {
  console.log('Hasilnya adalah ' + tall * wide)
}

let tall = parseInt(prompt('Masukan panjang: '))
let wide = parseInt(prompt('Masukan tinggi: '))
rectangle(tall, wide)