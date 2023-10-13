let menu = prompt('Masukan beberapa menu ini: \n burger, nasi, susu, softdrink')
switch(menu) {
  case 'burger' :
    alert('Burger adalah makanan tidak sehat!')
    break
  case 'nasi' :
    alert('Nasi adalah makanan sehat!')
    break
  case 'susu' :
    alert('Susu adalah minuman sehat')
    break
  case 'softdrink' :
    alert('Softdrink adalah minuman sehat')
    break
  default:
    alert('Masukan nama menu yang ada!')
    break
}