let coba = true
while(coba) {
  coba = prompt("Siapa nama kamu?")
  confirm(`Halo ${coba}`)
  coba = confirm('Ulang lagi?')
}