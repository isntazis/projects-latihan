function tambah(a, b) // parameters {
  return a + b // return value of a plus b
}

function kali(a, b) // parameters {
  return a * b // return value of a multi b
}

let result = kali(tambah(1, 2), tambah(2, 3)) // arguments of kali and tambah in this case, the first result is tambah, and then tambah multi by kali
console.log(result) // output of the result variable