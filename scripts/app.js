const form = document.querySelector("form");

const UI = (data) => {
  const details = document.querySelector(".details");
  const card = document.querySelector(".card");

  if (card.classList.contains("no-display")) {
    card.classList.remove("no-display");
  }

  //Destructuring
  const { passCity, passWeather } = data;

  //Updating UI
  const timePic = document.querySelector("img.time");
  const timeIcon = document.querySelector(".icon img");

  passWeather.IsDayTime
    ? timePic.setAttribute("src", "img/day.svg")
    : timePic.setAttribute("src", "img/night.svg");

  iconSrc = `img/icons/${passWeather.WeatherIcon}.svg`;
  timeIcon.setAttribute("src", iconSrc);

  details.innerHTML = `<h5 class="my-3 city-name">${passCity.LocalizedName}, ${passCity.AdministrativeArea.LocalizedName}, ${passCity.Country.LocalizedName} </h5>
  <div class="my-3 weather-condition">${passWeather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${data.passWeather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>`;
};

const cityDetails = async (city) => {
  const passCity = await getCity(city);
  const passWeather = await getWeather(passCity.Key);

  return { passCity: passCity, passWeather: passWeather };
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = form.city.value.trim();
  form.reset();
  cityDetails(city)
    .then((data) => {
      UI(data);
    })
    .catch((err) => {
      return err;
    });
});
