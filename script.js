const container = document.querySelector('.conatiner');
const input = document.getElementById('city');
const search = document.getElementById('search');
const condition = document.querySelector('.condition');
const cityName = document.querySelector('.city');
const date = document.querySelector('.date');
const time = document.querySelector('.time');
const currTemp = document.querySelector('.currTemp');
const currIcon = document.querySelector('.currIcon');
const wind = document.querySelector('.wind');
const rain = document.querySelector('.rain');
const humidity = document.querySelector('.humidity');
const updated = document.querySelector('.updated');
const statusImg = document.querySelector('.statusImg');




search.addEventListener('click',() => {
    
    locateWeather(); 
});


let toggleUnit = true;


async function locateWeather() {
    
   city = input.value;
    const response =  await fetch(`https://api.weatherapi.com/v1/current.json?key=5161031428224d93a5c110443230404&q=${city}` , {mode: 'cors'})
    const weatherData = await response.json();
    const list = weatherData.current;
    console.log(weatherData);
    // console.log(list);
    extract(list);
    // return list[feelslike_c];


//for forecast

    
    city = input.value;
     const response2 =  await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5161031428224d93a5c110443230404&q=${city}` , {mode: 'cors'})
     const weatherData2 = await response2.json();
     const forecast = weatherData2.forecast.forecastday[0].day;
    // console.log(forecast);
    extractFore(forecast);
 
} 
// locateWeather();


// })

function extract(lis) {
    const description = lis.condition.text;
    condition.textContent = lis.condition.text;
    cityName.textContent = input.value
    //get date
    const tempDate = new Date();
    
    let day = tempDate.getDate();
    let month = tempDate.getMonth() + 1;
    let year = tempDate.getFullYear();
    date.textContent = `${day}/${month}/${year}`;
    //date end
    //get time
    currTemp.innerHTML = `${lis.temp_c}°C`
    time.textContent = tempDate.getHours() + ":" + tempDate.getMinutes();
    //time end
//    humidity.innerHTML= `<i class="fa-solid fa-droplet-percent">${lis.humidity}%</i>`;
    humidity.innerHTML = `&nbsp&nbsp&nbsp${lis.humidity}%`
    // humidity.textContent= `${lis.humidity}%`;
    // wind.textContent = `${lis.wind_mph}mph`;
    wind.innerHTML = `&nbsp&nbsp&nbsp${lis.wind_mph}mph`
    console.log(lis.condition);
    getSticker(description);
    updated.innerHTML = `<br>${lis.last_updated}`
    // statusImg.textContent = getSticker(description);
    // console.log(getSticker(description));
    
}
// for forecast
function extractFore(li) {
    console.log(li);
   
    rain.innerHTML = `&nbsp&nbsp&nbsp${li.daily_will_it_rain}%</i>`

    // wind.textContent = li.wind_mph;
    // humidity.textContent= li.humidity;
} 

    //  const updated = list.last_updated;
    //  const wind = list.wind_mph;
    //  const humid = list.humidity;
    //  const tempF = list.temp_f;
    //  const tempC = list.temp_c;
     
    
// }
//funciton for icon regardign condition.
// async function iconCon(condition) {
//     const response = await fetch("https://api.giphy.com/v1/stickers/translate?api_key=qitI9CMnXX08n6UFhJJoChiA9ZKbAl53&s=" + condition, {mode: "cors"})
//     const sticker = await response.json();
//     const link = sticker.data.images.fixed_height.url;
//     return (link);
//  }


async function getSticker (search) {
    
      const response = await fetch("https://api.giphy.com/v1/stickers/translate?api_key=SB40zUo5xnGkpUnEhdoLLgNyU8FU1iXV&s=" + search, {mode: "cors"})
      const sticker = await response.json();
      statusImg.src = sticker.data.images.fixed_height.url;
      
      
      
   
  };

// function iconLoad (code){
//     if( code === 'Sunny') {
//         statusImg.src = "https://i.imgur.com/quUI1pG_d.webp?maxwidth=520&shape=thumb&fidelity=high";
//     }

//     if( code === 'Sunny') {
//         statusImg.src = "https://i.imgur.com/quUI1pG_d.webp?maxwidth=520&shape=thumb&fidelity=high";
//     }
// } 



