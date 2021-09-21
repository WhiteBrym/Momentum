const form = document.querySelector('.js-form'),
  input = form.querySelector('input'),
  gretings = document.querySelector('.js-gretings'),
  USER_LS = 'curentUsername',
  SHOWING_CN = 'showing'

function showGreeting(text) {
  gretings.textContent = `Привет ${text}`
  gretings.classList.add(SHOWING_CN)
  form.classList.remove(SHOWING_CN)
}
function saveUserName(text) {
  localStorage.setItem(USER_LS, text)
}

function askForUsername() {
  form.classList.add(SHOWING_CN)
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputValue = input.value
    showGreeting(inputValue)
    saveUserName(inputValue)
  })
}

function loadUsername() {
  const curentUsername = localStorage.getItem(USER_LS)
  if (curentUsername === null) {
    askForUsername()
  } else {
    showGreeting(curentUsername)
  }
}
console.log(input.textContent)
function init() {
  loadUsername()
}
init()
