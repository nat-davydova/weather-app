//*** DATE AND TIME
export default class DateTime {

	constructor() {
		const fullDate = new Date();

		this.year = fullDate.getFullYear();
		this.month = fullDate.getMonth();
		this.date = fullDate.getDate();
		this.hours = fullDate.getHours();
		this.mins = fullDate.getMinutes();
	}



};