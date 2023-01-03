import React, { useState, useEffect } from "react";

//own components
import SearchBar from "./components/SearchBar";
import AppToolBar from "./components/AppToolBar";
import WeatherTable from "./components/WeatherTable";
import CurrentWeather from "./components/CurrentWeather";

//MUI components
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

//import useStyles from "./styles";

//API key
//3120aa87cedf9e5a9af6a2257e2ebae2

//geocoding url
//http://api.openweathermap.org/geo/1.0/direct?q=&appid=

//weather url
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const geoURL = "http://api.openweathermap.org/geo/1.0/direct?q="
const weatherURL = "http://api.openweathermap.org/data/2.5/forecast?"
const APIKey = "3120aa87cedf9e5a9af6a2257e2ebae2";

const App = () => {

    //fetch the weather
      const getWeather = async (city) => {
        //call the api for latloon coordinates
        const latLonResponse = await fetch(`${geoURL}${city}&appid=${APIKey}`)

        //once we get the lat lon coordinates
        const latLonData = await latLonResponse.json();

        const lat = latLonData[0].lat
        const lon = latLonData[0].lon

        const weatherResponse = await fetch(`${weatherURL}lat=${lat}&lon=${lon}&units=metric&appid=${APIKey}`);

        const weatherData = await weatherResponse.json();

        console.log(weatherData);

      }
      useEffect(() => {
        getWeather("honningsvåg");
      }, []);

  return (
    <>
      <CssBaseline />
      <main>
        <AppToolBar />
        <Typography variant="h3" align="center">
          Weather app
        </Typography>
        <SearchBar />
        <CurrentWeather />
        <WeatherTable />
      </main>
    </>
  );
};
export default App;