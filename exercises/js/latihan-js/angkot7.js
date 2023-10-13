let angkotBeroperasi = 6
let jmlAngkot = 10

for(let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if(noAngkot <= 6 && noAngkot !== 5) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5 ) {
    console.log('Angkot No. ' + noAngkot + ' sedang lembur.')
  } else {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
  }
}