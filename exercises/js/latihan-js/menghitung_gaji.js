const namaKaryawan = prompt('Masukan nama anda: ')
const gajiPerhari = parseInt(prompt('Masukan gaji perhari anda: '))
const jumlahMasukKerja = parseInt(prompt('Masukan jumlah masuk kerja anda: '))
const sum = gajiPerhari * jumlahMasukKerja

const count = (salary) => {
  console.log('Halo, ' + namaKaryawan + ' total gaji anda adalah ' + " Rp. " + sum.toLocaleString())
}

count(sum)