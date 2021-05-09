const endpoint = "http://api.openweathermap.org/data/2.5/forecast";
const apiKey = "bad46dfee1ae1125ec4faf31e63449de";
const kelvinToCelsius = (kel) => Math.round(kel - 273.15);

export default async function getForecast(city) {
  const qs = composeQS({ q: city, apiKey });
  const response = await fetch(`${endpoint}?${qs}`, {
    method: "GET",
  });
  const data = await response.json();

  return data.list
    ? data.list.map((item) => ({
        temperature: kelvinToCelsius(item.main.temp),
        time: item.dt,
        timeText: item.dt_txt,
        timeHours: item.dt_txt.slice(11, -3),
      }))
    : null;
}

function composeQS(variables) {
  return Object.entries(variables)
    .map((pair) => pair.join("="))
    .join("&");
}
