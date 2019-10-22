//import DOM from configs
import { DOM } from './../configs/path';

//render location info into location part of UI

export const renderLocation = (locationObj) => {

	DOM.location.content.textContent = `${locationObj.city}, ${locationObj.district}`;

};