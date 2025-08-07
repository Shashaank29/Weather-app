document.addEventListener("DOMContentLoaded", function(){

let b =document.getElementById("btn")
let c = document.getElementById("cityInput")
let l = document.getElementById("loading")
let r = document.getElementById("weatherResult")

b.addEventListener("click",function(){
    const city = c.value.trim();
    if(!city){
        r.innerHTML = "please enter a city name";
        return;
    }


l.style.display="block";
r.innerText=" ";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb645b0e6925f983b8887a2f7119548e&units=metric;`

// now fetch api
fetch(url)
.then(response =>{
if(!response.ok){
    throw new Error("city not found");
}
return response.json();
 })

.then(data=>{       //for accessing data
console.log(data);

l.style.display="none";
r.innerHTML = `🌍 ${data.name} — ${data.main.temp}°C — ${data.weather[0].main}`;
})

.catch(error=>{
l.style.display="none";
r.innerHTML="city not found or network error";
console.error(error);                      // in case made any mistake
})
})
})