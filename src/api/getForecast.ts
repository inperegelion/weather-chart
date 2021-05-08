const endpoint = "http://api.openweathermap.org/data/2.5/forecast"
const apiKey = "bad46dfee1ae1125ec4faf31e63449de"

type ForecastPoint = {
  temperature: number,
  time: number,
  timeText: string
}
type Forecast = ForecastPoint[] | false


export default async function getForecast(city: string): Promise<Forecast> {
  const qs = composeQS({ q: city, apiKey })
  const response = await fetch(`${endpoint}?${qs}`, {
    "method": "GET"
  })
  const data = await response.json()

  return data.list ? data.list.map((item: any) => ({
    temperature: item.main.temp,
    time: item.dt,
    timeText: item.dt_txt
  })) : false
}


function composeQS(variables: object): string {
  return Object.entries(variables).map(pair => pair.join('=')).join('&')
}
