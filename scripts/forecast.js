const KEY = "H7BZgXrK3NhLea3eoXMqbWbfgAHBUzpF";
const getCity = async (city) => {
  const BASE_URL =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const QUERY = `?apikey=${KEY}&q=${city}`;

  const response = await fetch(BASE_URL + QUERY);
  const data = await response.json();

  return data[0];
};

const getWeather = async (id) => {
  const BASE = "http://dataservice.accuweather.com/currentconditions/v1/";
  const response = await fetch(`${BASE}${id}/?apikey=${KEY}`);
  const data = await response.json();

  return data[0];
};
