const body = document.querySelector('body')
const numberAll = 3

function randomNumber() {
  return Math.floor(Math.random() * numberAll)
}

function imageFont(number) {
  const img = new Image()
  img.src = `images/${number + 1}.png`
  console.log(img)
  img.classList.add('bgImage')
  body.prepend(img)
}

function init() {
  const number = randomNumber()
  imageFont(number)
}

init()
