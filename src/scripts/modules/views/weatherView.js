//import DOM from configs
import { DOM } from './../configs/path';

//render weather item into the DOM - helper function
const renderWeatherItem = (item, uiElem) => {
	uiElem.textContent = item;
};

export const renderWeather = (weatherObj) => {

	//render wind
	renderWeatherItem(`${weatherObj.wind} m/s`, DOM.weather.wind)

};