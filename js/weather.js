
const API_KEY = "9ae91c3660721e4fcc1eace36af61933";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    city.innerText = data.name;
    
    });
}

function onGeoError(){
    alert("Can't find you. No weather.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);