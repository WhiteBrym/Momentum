const CORDS_LS = 'cords'
const API_KEY = '8e37f1817f39dd831ca1af12a1c1ce9d'
const spanWether = document.querySelector('.js-wether')
function getWether(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      const temp = json.main.temp
      const place = json.name
      spanWether.textContent = `${Math.floor(temp)}° : ${place}`
    })
}

function saveCords(positionObj) {
  localStorage.setItem(CORDS_LS, JSON.stringify(positionObj))
}

function geoErrorHandler() {
  console.log('Error')
}

function geoSaccessHandler(position) {
  const latitud = position.coords.latitude
  const longitude = position.coords.longitude

  const positionObj = {
    latitud: latitud,
    longitude: longitude,
  }
  saveCords(positionObj)
  getWether(latitud, longitude)
}

function askCords() {
  navigator.geolocation.getCurrentPosition(geoSaccessHandler, geoErrorHandler)
}

function getCords() {
  const cords = localStorage.getItem(CORDS_LS)
  if (cords === null) {
    askCords()
  } else {
    const loadedCords = JSON.parse(cords)
    console.log(loadedCords)
    getWether(loadedCords.latitud, loadedCords.longitude)
  }
}

function init() {
  getCords()
}
init()
