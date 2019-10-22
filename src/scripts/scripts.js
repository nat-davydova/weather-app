//APP IMPORTS

//import models
import DateTime from "./modules/models/DateTime";
import Location from "./modules/models/Location";

//import views
import * as dateView from './modules/views/dateTimeVew';
import * as locationView from './modules/views/locationView';

//import utils
import {handleError, clearUI, showPreloader} from "./modules/configs/utils";

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

	//rendering UI (error text or location)
	if(state.location.locationError) {

		//render error text
		handleError(state.location.locationError, DOM.location.content);

	} else {

		//render location into UI
		locationView.renderLocation(state.location);

	}
};

//*** ONLOAD EVENT HANDLER (DATE/TIME/LOCATION)
window.addEventListener('load', () => {

	//date and time controller
	dateController();

	//location controller
	locationController();

});

console.log(state);