//import DOM from configs
import { DOM } from './../configs/path';

//render location info into location part of UI

export const renderLocation = (locationObj) => {

	if(locationObj.city && locationObj.district) {
		DOM.location.content.textContent = `${locationObj.city}, ${locationObj.district}`;
	} else if (locationObj.city) {
		DOM.location.content.textContent = `${locationObj.city}`;
	} else if(locationObj.district) {
		DOM.location.content.textContent = `${locationObj.district}`;
	}



};