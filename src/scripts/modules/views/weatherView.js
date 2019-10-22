//import DOM from configs
import { DOM } from './../configs/path';

//render weather item into the DOM - helper function
const renderWeatherItem = (item, uiElem) => {
	uiElem.textContent = item;
};

//convert unix time to readable Time
const unixToDate = unix => {

	const date = new Date(unix * 1000);

	const hours = date.getHours();

	const mins =  date.getMinutes();

	return [hours, mins];
};

export const renderWeather = (weatherObj) => {

	//render wind
	renderWeatherItem(`${weatherObj.wind} m/s`, DOM.weather.wind);

	//render humidity
	renderWeatherItem(`${weatherObj.humidity} %`, DOM.weather.humidity);

	//render pressure
	renderWeatherItem(`${weatherObj.pressure} hPA`, DOM.weather.pressure);

	//render sunrise
	const [ sunrHours, sunrMins ] = unixToDate(weatherObj.sunrise);

	renderWeatherItem(`${sunrHours}:${sunrMins}`, DOM.weather.sunrise);

	//render sunset
	const [ sunsHours, sunsMins ] = unixToDate(weatherObj.sunset);

	renderWeatherItem(`${sunsHours}:${sunsMins}`, DOM.weather.sunset);
};