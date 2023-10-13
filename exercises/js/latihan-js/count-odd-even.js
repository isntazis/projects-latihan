let bil = prompt('Masukan angka: ')
if(bil % 2 === 0) {
  console.log('Bilangan ' + bil + ' adalah bilangan genap')
}else if (bil %2 === 1){
  console.log('Bilangan ' + bil + ' adalah bilangan ganjil')
}else {
  console.log('Ini ' + bil + ' bukan bilangan !')
}