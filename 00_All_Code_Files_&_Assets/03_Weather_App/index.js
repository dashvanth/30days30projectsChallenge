
// open weather app api key and url 

const apiKey= `e1fe3cca03c177799fcad1a89fde5ca3`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=metric`

// selecting elements 
let weatherIcon = document.querySelector(".weather-display img");
const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");

// getting weather using api 
async function getWeather(city){
    try{
        const response = await fetch(apiUrl+ `&q=${city}`);

        if(response.status == 404 || " " ){
            document.querySelector(".error-msg p").style.display = "block";
            document.querySelector(".weather-display").style.display = "none";
            document.querySelector(".weather-details").style.display = "none";
        }

        var data = await response.json();
        document.querySelector(".temp-value").innerHTML = `${Math.round(data.main.temp)}° c`;
        const displayCity = document.querySelector(".city").innerHTML = `${data.name}`;
        document.querySelector(".humidity-value").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind-value").innerHTML = `${data.wind.speed} km/h`;
    
        if(data.weather[0].main =='Clouds'){
            weatherIcon.src = "./00_Assets/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "./00_Assets/clear.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./00_Assets/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./00_Assets/mist.png";
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "./00_Assets/snow.png";
        }else if(data.weather[0].main == "Wind"){
            weatherIcon.src = "./00_Assets/wind.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "./00_Assets/rain.png";
        }
        document.querySelector(".error-msg p").style.display = "none";
        document.querySelector(".weather-display").style.display = "block";
        document.querySelector(".weather-details").style.display = "flex";
        document.querySelector(".heading").style.display = "none";

    }catch(err){
        console.log("Something went wrong!",err);
    }

}

// if clicked on search button 
searchBtn.addEventListener("click",()=>{
    getWeather(searchBox.value);
});

// if press enter in keyboard 
searchBox.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        getWeather(searchBox.value);
    }
});