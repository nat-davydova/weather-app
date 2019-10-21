//APP IMPORTS

//import models
import DateTime from "./modules/models/DateTime";

//import configs
import DOM from './modules/configs/path';



//state
//here stored:
// date and time
// location
// local weather
const state = {};

//*** DATE AND TIME CONTROLLER
const dateController = () => {

	state.date = new DateTime();

};

//*** ONLOAD EVENT HANDLER (DATE/TIME/LOCATION)
window.addEventListener('load', () => {

	//date and time controller
	dateController();

});

console.log(state);