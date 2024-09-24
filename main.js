let form = document.querySelector("form");
let input = document.querySelector("input");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let p = document.querySelector("p");
let img = document.querySelector("img");
let card = document.querySelector("#weatherCard");
let container = document.querySelector(".container");

const fetchWeather = async (e) => {
  e.preventDefault();

  try {
    card.className = "card my-3 rounded-0 shadow p-4";

    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=d2729edcdb1f495096f110834240103&q=${input.value}&aqi=yes`
    );
    const data = await response.json();

    let cityName = data.location.name;
    let temp = data.current.temp_c;
    let text = data.current.condition.text;
    let icon = data.current.condition.icon;

    h1.innerText = temp + "°C";
    h2.innerText = cityName;
    p.innerText = text;
    img.setAttribute("src", icon);
    container.style.backgroundImage = `url(https://source.unsplash.com/random/?${text},${cityName})`;
    container.style.backgroundSize = "cover";
    container.style.minHieght = "100vh";
  } catch (error) {
    window.alert("Please Enter Valid City Name");
  }

  form.reset();
};

form.addEventListener("submit", fetchWeather);
