

const searchBox = document.getElementById('search')
const searchButton = document.querySelector('.search')

let searched;

async function loadSearched () {
    let CurrentWeatherInUrl = "https://api.weatherapi.com/v1/current.json?key=f64289458a7443a396c160259230705&q="
    let searchedUrl = CurrentWeatherInUrl.concat(`${searched}`)

        let forecastURL = "https://api.weatherapi.com/v1/forecast.json?key=f64289458a7443a396c160259230705&q="
    let forecastURLSearched = forecastURL.concat(`${searched}`.concat('&days=5'))

    const response = await fetch(`${searchedUrl}`, {mode: 'cors'})
    const data = response.json()
    
     const forecastResponse = await fetch(`${forecastURLSearched }`, {mode: 'cors'})
     const forecastResponseData = forecastResponse.json()

     //array of current location weather and the weather forecast
     const theWeather = Promise.all([data, forecastResponseData]);
    try {
const all = await theWeather

console.log(`${all[0].location.name}, ${all[0].location.region}, ${all[0].location.country}, ${all[0].current.condition.text}, temp: ${all[0].current.temp_c} °C, feels like: ${all[0].current.feelslike_c} °C, windspeed: ${all[0].current.wind_mph} mph, humidity: ${all[0].current.humidity} % `)


for (let d = 0; d < all[1].forecast.forecastday.length; d++) {
  console.log(all[1].forecast.forecastday[d].day.condition.text)
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
