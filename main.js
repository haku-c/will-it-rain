async function getData() {
  const response = await fetch('https://api.weather.gov/gridpoints/BGM/43,69/forecast');
  const data = await response.json();
  console.log(data.properties.periods[0]);
}

getData();