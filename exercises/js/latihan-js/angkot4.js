let noAngkot = 1
let angkotBeroperasi = 6
let jmlAngkot = 10

for(noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if(noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
  } else if(noAngkot === 8) {
    console.log('Angkot No. ' + noAngkot + ' sedang lembur.')
  } else {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
  }
}