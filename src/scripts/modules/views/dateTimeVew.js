//import DOM from configs
import { DOM } from './../configs/path';

//render date/time item into the DOM - helper function
const renderDateItem = (item, uiElem) => {
	uiElem.textContent = item;
};

//render date and time
export const renderDate = (dateObj) => {

	//render year
	renderDateItem(dateObj.year, DOM.date.year);

	//render month
	renderDateItem(dateObj.month, DOM.date.month);

	//render date
	renderDateItem(dateObj.date, DOM.date.date);

	//render hours
	renderDateItem(dateObj.hours, DOM.time.hours);

	//render min
	renderDateItem(dateObj.mins, DOM.time.mins);

};