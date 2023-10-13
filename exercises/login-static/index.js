// gogoblesan js //
const container = document.getElementById("container")
const myText = document.getElementById("myText")
const usernameLabel = document.getElementById("uLabel")
const passwordLabel = document.getElementById("pLabel")
const username = document.getElementById("myUsername")
const password = document.getElementById("myPassword")
const loginBtn = document.getElementById("loginBtn")
const logoutBtn = document.getElementById("logoutBtn")
logoutBtn.style.display = "none"

function onLogin() {
  if(username.value == 'admin' && password.value == 'admin123') {
    window.alert('kamu login sebagai admin!')
    myText.innerHTML= "Anda adalah Admin"
    myText.style.padding= "2rem"
    container.style.margin = "0"
    container.style.backgroundColor = "#ff6a3d"
    container.style.height = "100vh"
    usernameLabel.style.display = "none"
    passwordLabel.style.display = "none"
    username.style.display = "none"
    password.style.display = "none"
    loginBtn.style.display = "none"
    logoutBtn.style.display = "block"
    logoutBtn.style.margin = "auto"
}

    if(username.value == 'user' && password.value == 'user123') {
    window.alert('kamu login sebagai user!')
    myText.innerHTML= "Anda adalah User"
    myText.style.padding= "2rem"
    usernameLabel.style.display = "none"
    passwordLabel.style.display = "none"
    username.style.display = "none"
    password.style.display = "none"
    loginBtn.style.display = "none"
    logoutBtn.style.display = "block"
    logoutBtn.style.margin = "auto"
  }
}

function onLogout() {
  localStorage.clear()
  location.reload()
}
