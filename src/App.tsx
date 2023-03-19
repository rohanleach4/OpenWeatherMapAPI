import React from 'react';
import WeatherApp from './WeatherApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Application: OpenWeatherMap API</h1>
      </header>
      <WeatherApp />
    </div>
  );
}

export default App;
