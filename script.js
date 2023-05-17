

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

//day 1 is the day after the current day
  d1.textContent = `${d1Day}`
  d1For.textContent = `${all[1].forecast.forecastday[1].day.condition.text}`
  d1Temp.textContent = `${all[1].forecast.forecastday[1].day.avgtemp_c}`

d2.textContent = `${d2Day}`
d2For.textContent = `${all[1].forecast.forecastday[2].day.condition.text}`
d2Temp.textContent = `${all[1].forecast.forecastday[2].day.avgtemp_c}`

d3.textContent = `${d3Day}`
d3For.textContent = `${all[1].forecast.forecastday[3].day.condition.text}`
d3Temp.textContent = `${all[1].forecast.forecastday[3].day.avgtemp_c}`

d4.textContent = `${d4Day}`
d4For.textContent = `${all[1].forecast.forecastday[4].day.condition.text}`
d4Temp.textContent = `${all[1].forecast.forecastday[4].day.avgtemp_c}`

d5.textContent = `${d5Day}`
d5For.textContent = `${all[1].forecast.forecastday[5].day.condition.text}`
d5Temp.textContent = `${all[1].forecast.forecastday[5].day.avgtemp_c}`

d6.textContent = `${d6Day}`
d6For.textContent = `${all[1].forecast.forecastday[6].day.condition.text}`
d6Temp.textContent = `${all[1].forecast.forecastday[6].day.avgtemp_c}`

d7.textContent = `${d7Day}`
d7For.textContent = `${all[1].forecast.forecastday[7].day.condition.text}`
d7Temp.textContent = `${all[1].forecast.forecastday[7].day.avgtemp_c}`

//conditionals for displaying correct day of week in forecast

//day1

if (d1.textContent.includes('0')) {
  d1.textContent = `Sunday`
}
else if (d1.textContent.includes('1')) {
  d1.textContent = `Monday`
}
else if (d1.textContent.includes('2')) {
  d1.textContent = `Tuesday`
}
else if (d1.textContent.includes('3')) {
  
    d1.textContent = `Wednesday`
}
else if (d1.textContent.includes('4')) {
  d1.textContent = `Thursday`
}
else if (d1.textContent.includes('5')) {
  d1.textContent = `Friday`
}
else if (d1.textContent.includes('6')) {
  d1.textContent = `Saturday`
}
else if (d1.textContent.includes('7')) {
  d1.textContent = `Sunday`
}

//day 2

if (d2.textContent.includes('0')) {
  d2.textContent = `Sunday`
}
else if (d2.textContent.includes('1')) {
  d2.textContent = `Monday`
}
else if (d2.textContent.includes('2')) {
  d2.textContent = `Tuesday`
}
else if (d2.textContent.includes('3')) {
  
    d2.textContent = `Wednesday`
}
else if (d2.textContent.includes('4')) {
  d2.textContent = `Thursday`
}
else if (d2.textContent.includes('5')) {
  d2.textContent = `Friday`
}
else if (d2.textContent.includes('6')) {
  d2.textContent = `Saturday`
}
else if (d2.textContent.includes('7')) {
  d2.textContent = `Sunday`
}

//day 3 

if (d3.textContent.includes('0')) {
  d3.textContent = `Sunday`
}
else if (d3.textContent.includes('1')) {
  d3.textContent = `Monday`
}
else if (d3.textContent.includes('2')) {
  d3.textContent = `Tuesday`
}
else if (d3.textContent.includes('3')) {
  
    d3.textContent = `Wednesday`
}
else if (d3.textContent.includes('4')) {
  d3.textContent = `Thursday`
}
else if (d3.textContent.includes('5')) {
  d3.textContent = `Friday`
}
else if (d3.textContent.includes('6')) {
  d3.textContent = `Saturday`
}
else if (d3.textContent.includes('7')) {
  d3.textContent = `Sunday`
}

//day 4

if (d4.textContent.includes('0')) {
  d4.textContent = `Sunday`
}
else if (d4.textContent.includes('1')) {
  d4.textContent = `Monday`
}
else if (d4.textContent.includes('2')) {
  d4.textContent = `Tuesday`
}
else if (d4.textContent.includes('3')) {
  
    d4.textContent = `Wednesday`
}
else if (d4.textContent.includes('4')) {
  d4.textContent = `Thursday`
}
else if (d4.textContent.includes('5')) {
  d4.textContent = `Friday`
}
else if (d4.textContent.includes('6')) {
  d4.textContent = `Saturday`
}
else if (d4.textContent.includes('7')) {
  d4.textContent = `Sunday`
}

//day 5

if (d5.textContent.includes('0')) {
  d5.textContent = `Sunday`
}
else if (d5.textContent.includes('1')) {
  d5.textContent = `Monday`
}
else if (d5.textContent.includes('2')) {
  d5.textContent = `Tuesday`
}
else if (d5.textContent.includes('3')) {
  
    d5.textContent = `Wednesday`
}
else if (d5.textContent.includes('4')) {
  d5.textContent = `Thursday`
}
else if (d5.textContent.includes('5')) {
  d5.textContent = `Friday`
}
else if (d5.textContent.includes('6')) {
  d5.textContent = `Saturday`
}
else if (d5.textContent.includes('7')) {
  d5.textContent = `Sunday`
}

//day 6
if (d6.textContent.includes('0')) {
  d6.textContent = `Sunday`
}
else if (d6.textContent.includes('1')) {
  d6.textContent = `Monday`
}
else if (d6.textContent.includes('2')) {
  d6.textContent = `Tuesday`
}
else if (d6.textContent.includes('3')) {
  
    d6.textContent = `Wednesday`
}
else if (d6.textContent.includes('4')) {
  d6.textContent = `Thursday`
}
else if (d6.textContent.includes('5')) {
  d6.textContent = `Friday`
}
else if (d6.textContent.includes('6')) {
  d6.textContent = `Saturday`
}
else if (d6.textContent.includes('7')) {
  d6.textContent = `Sunday`
}

//day 7
if (d7.textContent.includes('0')) {
  d7.textContent = `Sunday`
}
else if (d7.textContent.includes('1')) {
  d7.textContent = `Monday`
}
else if (d7.textContent.includes('2')) {
  d7.textContent = `Tuesday`
}
else if (d7.textContent.includes('3')) {
  
    d7.textContent = `Wednesday`
}
else if (d7.textContent.includes('4')) {
  d7.textContent = `Thursday`
}
else if (d7.textContent.includes('5')) {
  d7.textContent = `Friday`
}
else if (d7.textContent.includes('6')) {
  d7.textContent = `Saturday`
}
else if (d7.textContent.includes('7')) {
  d7.textContent = `Sunday`
}

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


function getSearch () {
      
    searched = searchBox.value
    return searched
  }
  searchBox.addEventListener('change', getSearch)
searchButton.addEventListener('click', loadSearched)

