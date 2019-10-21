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

	//converting month from number to month name
	getMonth = () => {

		const monthArr = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Nov',
			'Dec'
		];

		const numMonth = this.month;

		this.month = monthArr[numMonth];

	};

};