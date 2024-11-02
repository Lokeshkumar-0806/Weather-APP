const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('SearchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
const location_not_found=document.querySelector('.location-not-found');
const weather_body=document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key="ddad95c8b7e61af3e6b2b2597a7f4291";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data=await fetch(url);
    let data =await weather_data.json();
    
    console.log(data);
    if(data.cod===`404`){
        location_not_found.style.display="flex";
        weather_body.style.display="none"
        
        return;
    }
    location_not_found.style.display="none";
    weather_body.style.display="flex";
    temperature.innerHTML=`${Math.round(data.main.temp-273.15)}`;
    description.innerHTML=`${data.weather[0].description}`;
    wind_speed.innerHTML=`${data.wind.speed}Km/H`;
    humidity.innerHTML=`${data.main.humidity}%`;
    switch(data.weather[0].main){
        case 'clouds':
            weather_img.src="/assests/cloud.webp";
            break;
        case 'Clear':
            weather_img.src="/assests/clear.webp";
            break;
        case 'Rain':
            weather_img.src="/assests/rain.webp";
            break;
        case 'Mist':
            weather_img.src="/assests/mist.webp";
            break;
        case 'Snow':
            weather_img.src="/assests/snow.webp";
            break;
            
    }

    

}


searchBtn.addEventListener('click',function(){
    checkWeather(inputBox.value);
})