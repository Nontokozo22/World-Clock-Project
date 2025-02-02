function updateTime(){
let brisbaneElement = document.querySelector("#brisbane");
if (brisbaneElement){
let brisbaneDatElement = brisbaneElement.querySelector(".date");
let brisbaneTimeElement = brisbaneElement.querySelector(".time");


brisbaneDatElement.innerHTML = moment().tz("Australia/Brisbane").format("MMMM Do YYYY")
brisbaneTimeElement.innerHTML = moment().tz("Australia/Brisbane").format("H:mm:ss [<small>]a[</small>]")
}

let jerusalemElement = document.querySelector("#jerusalem");
if(jerusalemElement){
let jerusalemDatElement = jerusalemElement.querySelector(".date");
let jerusalemTimeElement = jerusalemElement.querySelector(".time");


jerusalemDatElement.innerHTML = moment().tz("Asia/Jerusalem").format("MMMM Do YYYY")
jerusalemTimeElement.innerHTML = moment().tz("Asia/Jerusalem").format("H:mm:ss [<small>]a[</small>]")
}

let nairobiElement = document.querySelector("#nairobi");
if(nairobiElement){
let nairobiDatElement = nairobiElement.querySelector(".date");
let nairobiTimeElement = nairobiElement.querySelector(".time");


nairobiDatElement.innerHTML = moment().tz("Africa/Nairobi").format("MMMM Do YYYY")
nairobiTimeElement.innerHTML = moment().tz("Africa/Nairobi").format("H:mm:ss [<small>]a[</small>]")
}
let jamaicaElement = document.querySelector("#jamaica");
if(jamaicaElement){
let jamaicaDatElement = jamaicaElement.querySelector(".date");
let jamaicaTimeElement = jamaicaElement.querySelector(".time");


jamaicaDatElement.innerHTML = moment().tz("America/Jamaica").format("MMMM Do YYYY")
jamaicaTimeElement.innerHTML = moment().tz("America/Jamaica").format("H:mm:ss [<small>]a[</small>]")
}

};


function updateCity(event){
let cityTimeZone = event.target.value;
let cityTime = moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities");
if (cityTimeZone === "current"){
  cityTimeZone = moment.tz.guess();
}
let cityName = cityTimeZone.replace("_", " ").split("/")[1];
citiesElement.innerHTML = `
<div class="city">
    <div>
        <h3>${cityName}</h3>
     <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("H:mm:ss")}<small>${cityTime.format("A")}</small></div>
  </div>
  <a href ="index.html"> All cities</a>
  `;
}
updateTime();
setInterval(updateTime, 1);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);

function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("darker")) {
    body.classList.remove("darker");
  } else {
    body.classList.add("darker");
  }
}
let theme = document.querySelector(".theme-button");
theme.addEventListener("click", changeTheme);
