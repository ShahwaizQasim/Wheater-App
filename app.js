
let form = document.querySelector("#weatherForm");
let myInput = document.querySelector("#my-input");
const API_KEY = "0cddb8b14288b6d5d30fc7f9c60711ea";

/* Api data ko show krwany ky liye kuch element ko select kiya hai */
let temp = document.querySelector("#cityTemp");
let humidity = document.querySelector("#cityHumidity");
let wind = document.querySelector("#cityWind");
let cityPrecipitation = document.querySelector("#city_Precipitation");
let cityFeels = document.querySelector("#city_FeelsLike");
//let mybutton = document.querySelector("#my-button");

 const formHandler = async (event) => {
 try{
  event.preventDefault(); //is se page referesh nhi hota

   let city_temperature = myInput.value;
  //  let city_firstAlphaCapital = city_temperature.slice(0,1).UpperCase();
   humidity.innerText = "loading...";

   const response = await axios( `https://api.openweathermap.org/data/2.5/weather?q=${city_temperature}&appid=${API_KEY}&units=metric`);
   temp.innerHTML = `${response.data.main.temp} °C <br/> ${city_temperature}`;
   humidity.innerText = `${response.data.main.humidity}`;
   wind.innerText = `${response.data.wind.speed}°C`;
   cityPrecipitation.innerText = `${response.data.main.pressure}°C`;
   cityFeels.innerText = `${response.data.main.feels_like}°C`;
   console.log(response);

 }catch(error){
   //console.log(error);
   temp.innerText = error?.response?.data?.message || "Unknown Error"
 }
};

form.addEventListener("submit", formHandler);



/* dark mode and light mode */

/* elements ko select kiya hai */ 
const body = document.querySelector("body");
const box = document.querySelector(".box-light");
const navbar = document.querySelector(".navbar-light");
const button = document.querySelector("#btn1");
isDarkMode = true;

button.addEventListener("click", () => {
  if (isDarkMode === true) {
    body.className = `dark`;
    box.className = "box-dark";
    navbar.className = "navbar-dark";
    button.innerHTML = "Light Mode <i class='fa-regular fa-sun'></i>";
    // isDarkMode = !isDarkMode;
  } else {
    body.className = "light";
    box.className = "box-light";
    navbar.className = "navbar-light";
    button.innerHTML = "Dark Mode <i class='fa-solid fa-moon'></i>";
    // isDarkMode = !isDarkMode;
  }
   isDarkMode = !isDarkMode;
});














/* error handling */
// try{
//   let a = "rrr";
//   console.log(v);
// }catch(error){
//   console.log("Shehzad");
// }


// try{
//   try{
//     ayesha;
//   }catch(error){
//     maria;
//   }
// }catch(shehzad){
//   console.log("shehzad", shehzad);
// }