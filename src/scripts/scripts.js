//APP IMPORTS

//import models
import DateTime from "./modules/models/DateTime";

//import views
import * as dateView from './modules/views/dateTimeVew';

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

//*** ONLOAD EVENT HANDLER (DATE/TIME/LOCATION)
window.addEventListener('load', () => {

	//date and time controller
	dateController();

});

console.log(state);