//APP IMPORTS

//import models
import DateTime from "./modules/models/DateTime";
import Location from "./modules/models/Location";
import Weather from "./modules/models/Weather";

//import views
import * as dateView from './modules/views/dateTimeVew';
import * as locationView from './modules/views/locationView';
import * as weatherView from './modules/views/weatherView';

//import utils
import {handleError, clearUI, showPreloader, hidePreloader} from "./modules/configs/utils";

//import configs
import { DOM } from './modules/configs/path';


//state
//here stored:
// date and time
// location
// local weather
const state = {};

//*** DATE AND TIME CONTROLLER
const dateController = () => {

	//setting date and time class
	state.date = new DateTime();

	//convert month from nums to month name
	state.date.getMonth();

	//render date and time into UI
	dateView.renderDate(state.date);

};

//*** LOCATION CONTROLLER
const locationController = async () => {

	//setting new location
	state.location = new Location();

	//prepare UI before rendering anything (clearing content, showing preloader)
	clearUI(DOM.location.content);
	showPreloader(DOM.location.preloader);

	//grabbing location from model
	await state.location.geolocation();

	//hide loader
	hidePreloader(DOM.location.preloader);

	//rendering UI (error text or location)
	if(state.location.locationError) {

		//render error text
		handleError(state.location.locationError, DOM.location.content);

	} else {

		//render location into UI
		locationView.renderLocation(state.location);

	}
};

//*** WEATHER CONTROLLER
const weatherController = async () => {

	//setting new Weather class
	state.weather = new Weather('C');

	//prepare UI before rendering anything (showing preloader)
	showPreloader(DOM.weather.preloader);

	//grab weather info
	await state.weather.getWeather(state.location.lat, state.location.long);

	//create weather title
	state.weather.weatherTitle();

	//hide loader
	hidePreloader(DOM.weather.preloader);

	//rendering UI (error or weather info)
	if(state.weather.weatherError) {

		//render error text
		handleError(state.weather.weatherError, DOM.weather.info);

	} else {

		//render weather object into UI (except temperature)
		weatherView.renderWeather(state.weather, state.date);

		//render temperature into UI
		weatherView.renderTemperature(state.weather.temperature, state.weather.degreesType);

	}

};

//*** ONLOAD EVENT HANDLER (DATE/TIME/LOCATION)
window.addEventListener('load', async () => {

	//date and time controller
	dateController();

	//location controller
	await locationController();

	//weather controller
	await weatherController();

});

//*** CLICK TO CONVERT TEMPERATURE BTN HOLDER
const convertBtn = DOM.weather.convertBtn;

convertBtn.addEventListener('click', () => {

	//convert temperature
	state.weather.convertTemperature();

	//render temperature into UI
	weatherView.renderTemperature(state.weather.temperature, state.weather.degreesType);

});

console.log(state);