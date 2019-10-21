//import DOM from configs
import { DOM } from './../configs/path';

//render date/time item into the DOM - helper function
const renderDateItem = (item, uiElem) => {
	uiElem.textContent = item;
};

//convert 1-digit numbers to 2-digits numbers
const twoDigitsConvert = (elem) => (`0${elem}`);

//render date and time
export const renderDate = (dateObj) => {

	//converting numbers into 2-digits
	if(dateObj.date < 10) {
		dateObj.date = twoDigitsConvert(dateObj.date);
	}

	if(dateObj.hours < 10) {
		dateObj.hours = twoDigitsConvert(dateObj.hours);
	}

	if(dateObj.mins < 10) {
		dateObj.mins = twoDigitsConvert(dateObj.mins);
	}

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