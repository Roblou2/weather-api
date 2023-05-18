
//DOM variables

const searchBox = document.getElementById('search')
const searchButton = document.querySelector('.search')

let place = document.querySelector('h2.location')
let currentWeather = document.querySelector('h3.current-weather')
let temp = document.querySelector('h2.temp')
let windspeed = document.querySelector('h3.windspeed')
let feelsLike = document.querySelector('h3.feels-like')
let humid = document.querySelector('h3.humidity')
let date = document.querySelector('p.date')

let d1 = document.querySelector('.d1')
let d1For = document.querySelector('.d1-for')
let d1Temp = document.querySelector('.d1-temp')

let d2 = document.querySelector('.d2')
let d2For = document.querySelector('.d2-for')
let d2Temp = document.querySelector('.d2-temp')

let d3 = document.querySelector('.d3')
let d3For = document.querySelector('.d3-for')
let d3Temp = document.querySelector('.d3-temp')

let d4 = document.querySelector('.d4')
let d4For = document.querySelector('.d4-for')
let d4Temp = document.querySelector('.d4-temp')

let d5 = document.querySelector('.d5')
let d5For = document.querySelector('.d5-for')
let d5Temp = document.querySelector('.d5-temp')

let d6 = document.querySelector('.d6')
let d6For = document.querySelector('.d6-for')
let d6Temp = document.querySelector('.d6-temp')

let d7 = document.querySelector('.d7')
let d7For = document.querySelector('.d7-for')
let d7Temp = document.querySelector('.d7-temp')

let d1Day;
let d2Day;
let d3Day;
let d4Day;
let d5Day;
let d6Day;
let d7Day;

let body = document.querySelector('body')

let searched;

//make forecast object for given day

const someDay = (whatDay, theForecast, theTemp) => {


if (whatDay == 0) {
  whatDay = `Sunday`
}
else if (whatDay == 1) {
  whatDay = `Monday`
}
else if (whatDay == 2) {
  whatDay = `Tuesday`
}
else if (whatDay == 3) {
  
  whatDay = `Wednesday`
}
else if (whatDay == 4) {
  whatDay = `Thursday`
}
else if (whatDay == 5) {
  whatDay = `Friday`
}
else if (whatDay == 6) {
  whatDay = `Saturday`
}

const getDay = () => whatDay
  
  const getForecast = () => theForecast
  
  const getTemp = () => theTemp



  return {getDay, getForecast, getTemp}
}

//load data from searched location

async function loadSearched () {
    let CurrentWeatherInUrl = "https://api.weatherapi.com/v1/current.json?key=f64289458a7443a396c160259230705&q="
    let searchedUrl = CurrentWeatherInUrl.concat(`${searched}`)

        let forecastURL = "https://api.weatherapi.com/v1/forecast.json?key=f64289458a7443a396c160259230705&q="
    let forecastURLSearched = forecastURL.concat(`${searched}`.concat('&days=8'))

    const response = await fetch(`${searchedUrl}`, {mode: 'cors'})
    const data = response.json()
    
     const forecastResponse = await fetch(`${forecastURLSearched }`, {mode: 'cors'})

     const forecastResponseData = forecastResponse.json()

     //array of current location weather and the weather forecast
     const theWeather = Promise.all([data, forecastResponseData]);


    try {
const all = await theWeather

let theDate = new Date()

place.textContent = `${all[0].location.name}, ${all[0].location.region}, ${all[0].location.country}`
date.textContent = `${theDate.toString()}`
currentWeather.textContent = `${all[0].current.condition.text}`
temp.textContent = `${all[0].current.temp_c} °C`
feelsLike.textContent = `Feels like ${all[0].current.feelslike_c} °C`
windspeed.textContent = `Windspeed ${all[0].current.wind_mph} mph`
humid.textContent =`Humidity ${all[0].current.humidity} % `

let windSym = document.createElement('span')
windSym.classList.add('mdi')
windSym.classList.add('mdi-weather-windy')
windspeed.appendChild(windSym)

let therm = document.createElement('span')
therm.classList.add('mdi')
therm.classList.add('mdi-thermometer')
temp.appendChild(therm)

let thermFeel = document.createElement('span')
thermFeel.classList.add('mdi')
thermFeel.classList.add('mdi-coolant-temperature')
feelsLike.appendChild(thermFeel)

let humidity = document.createElement('span')
humidity.classList.add('mdi')
humidity.classList.add('mdi-water-percent')
humid.appendChild(humidity)



let d1Date = new Date(`${all[1].forecast.forecastday[1].date}`)
let d1Day = d1Date.getDay()

let d2Date = new Date(`${all[1].forecast.forecastday[2].date}`)
let d2Day = d2Date.getDay()

let d3Date = new Date(`${all[1].forecast.forecastday[3].date}`)
let d3Day = d3Date.getDay()


let d4Date = new Date(`${all[1].forecast.forecastday[4].date}`)
let d4Day = d4Date.getDay()

let d5Date = new Date(`${all[1].forecast.forecastday[5].date}`)
let d5Day = d5Date.getDay()

let d6Date = new Date(`${all[1].forecast.forecastday[6].date}`)
let d6Day = d6Date.getDay()

let d7Date = new Date(`${all[1].forecast.forecastday[7].date}`)
let d7Day = d7Date.getDay()

//make days for forecast with above factory function
const dayOne = someDay(d1Day, all[1].forecast.forecastday[1].day.condition.text, all[1].forecast.forecastday[1].day.avgtemp_c)

const dayTwo = someDay(d2Day, all[1].forecast.forecastday[2].day.condition.text, all[1].forecast.forecastday[2].day.avgtemp_c)

const dayThree = someDay(d3Day, all[1].forecast.forecastday[3].day.condition.text, all[1].forecast.forecastday[3].day.avgtemp_c)

const dayFour = someDay(d4Day, all[1].forecast.forecastday[4].day.condition.text, all[1].forecast.forecastday[4].day.avgtemp_c)

const dayFive = someDay(d5Day, all[1].forecast.forecastday[5].day.condition.text, all[1].forecast.forecastday[5].day.avgtemp_c)

const daySix = someDay(d6Day, all[1].forecast.forecastday[6].day.condition.text, all[1].forecast.forecastday[6].day.avgtemp_c)

const daySeven = someDay(d7Day, all[1].forecast.forecastday[7].day.condition.text, all[1].forecast.forecastday[7].day.avgtemp_c)



//display for forecast

  d1.textContent = `${dayOne.getDay()}`
  d1For.textContent = `${dayOne.getForecast()}`
  d1Temp.textContent = `${dayOne.getTemp()}`

d2.textContent = `${dayTwo.getDay()}`
d2For.textContent = `${dayTwo.getForecast()}`
d2Temp.textContent = `${dayTwo.getTemp()}`

d3.textContent = `${dayThree.getDay()}`
d3For.textContent = `${dayThree.getForecast()}`
d3Temp.textContent = `${dayThree.getTemp()}`

d4.textContent = `${dayFour.getDay()}`
d4For.textContent = `${dayFour.getForecast()}`
d4Temp.textContent = `${dayFour.getTemp()}`

d5.textContent = `${dayFive.getDay()}`
d5For.textContent = `${dayFive.getForecast()}`
d5Temp.textContent = `${dayFive.getTemp()}`

d6.textContent = `${daySix.getDay()}`
d6For.textContent = `${daySix.getForecast()}`
d6Temp.textContent = `${daySix.getTemp()}`

d7.textContent = `${daySeven.getDay()}`
d7For.textContent = `${daySeven.getForecast()}`
d7Temp.textContent =  `${daySeven.getTemp()}`


//display for searched location

if (currentWeather.textContent === 'Partly cloudy') {
body.style.backgroundImage = 'url(./partly-cloudy.png)'
let clouds = document.createElement('span')
clouds.classList.add('mdi')
clouds.classList.add('mdi-clouds')
currentWeather.appendChild(clouds)
}
else if (currentWeather.textContent === 'Sunny') {
  
  body.style.backgroundImage = 'url(./sunny.jpg)'
  let sun = document.createElement('span')
  sun.classList.add('mdi')
  sun.classList.add('mdi-white-balance-sunny')
  currentWeather.appendChild(sun)

}
else if (currentWeather.textContent === 'Showers') {
  body.style.backgroundImage = 'url(./shower.jpg)'
  let rain = document.createElement('span')
rain.classList.add('mdi')
rain.classList.add('mdi-weather-pouring')
currentWeather.appendChild(rain)
}

else if (currentWeather.textContent === 'Moderate rain') {
  body.style.backgroundImage = 'url(./rain.jpg)'
  let rain = document.createElement('span')
  rain.classList.add('mdi')
  rain.classList.add('mdi-weather-pouring')
  currentWeather.appendChild(rain)
}

else if (currentWeather.textContent === 'Light rain') {
  body.style.backgroundImage = 'url(./rain.jpg)'
  let rain = document.createElement('span')
  rain.classList.add('mdi')
  rain.classList.add('mdi-weather-pouring')
  currentWeather.appendChild(rain)
}

else if (currentWeather.textContent === 'Moderate or heavy rain with thunder') {
  body.style.backgroundImage = 'url(./shower.jpg)'
  let rain = document.createElement('span')
  rain.classList.add('mdi')
  rain.classList.add('mdi-weather-pouring')
  currentWeather.appendChild(rain)
}


else if (currentWeather.textContent === 'Mostly cloudy') {
  body.style.backgroundImage = 'url(./cloudy.jpg)'
  let clouds = document.createElement('span')
  clouds.classList.add('mdi')
  clouds.classList.add('mdi-clouds')
  currentWeather.appendChild(clouds)
}
else if (currentWeather.textContent === 'Thunderstorm') {
  body.style.backgroundImage = 'url(./thunder.jpg)'
  let thunder = document.createElement('span')
  thunder.classList.add('mdi')
  thunder.classList.add('mdi-weather-lightning-rainy')
  currentWeather.appendChild(thunder)
}

else if (currentWeather.textContent === 'Partly sunny') {
  body.style.backgroundImage = 'url(./partly-sunny.png)'
  let partlySunny = document.createElement('span')
  partlySunny.classList.add('mdi')
  partlySunny.classList.add('mdi-weather-partly-cloudy')
  currentWeather.appendChild(partlySunny)
}

else if (currentWeather.textContent === 'Overcast') {
  body.style.backgroundColor = '#e1e1e1'
}
}

    
     catch  (error) {
console.error("Not found")
     }
}


//get value of search input

function getSearch () {
      
    searched = searchBox.value
    return searched
  }
  searchBox.addEventListener('change', getSearch)
searchButton.addEventListener('click', loadSearched)

