# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

### `yarn test`

### `yarn build`

## Weather App

# This weather app is built on create-reat-app

## due to time, this bear bones app was constructed thus:

### I used my kickstart CSS library

https://github.com/rohanleach4/kickstart-css

### It references a typescript compendium of best pracitces, which I forked from andredesousa

https://github.com/rohanleach4/typescript-best-practices

### For _fun_ it references Axios rather than HTML5 Fetch

I would normally use _Fetch_ or depending on circumstance, _GraphQL_

```
const fetchWeather = async (location: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const data = await response.json();
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

  setWeatherData({
    description: data.weather[0].description,
    temperature: data.main.temp,
    sunrise,
    sunset,
  });
};


```

### To speed delivery with Typescript, I used VS Code to reference Typing errors
