

const searchBox = document.getElementById('search')
const searchButton = document.querySelector('.search')

let searched;

async function loadSearched () {
    let CurrentWeatherInUrl = "https://api.weatherapi.com/v1/current.json?key=f64289458a7443a396c160259230705&q="
    let searchedUrl = CurrentWeatherInUrl.concat(`${searched}`)

    try {
 const response = await fetch(`${searchedUrl}`, {mode: 'cors'})
const data = await response.json()
console.log(data.current.condition.text)
 
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
