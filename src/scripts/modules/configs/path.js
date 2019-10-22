//ALL THE DOM ELEMENTS STORED HERE
export const DOM = {

	date : {
		year: document.querySelector('.date__year'),
		month: document.querySelector('.date__month'),
		date: document.querySelector('.date__day'),
	},

	time: {
		hours: document.querySelector('.time__hour'),
		mins: document.querySelector('.time__minutes'),
	},

	location: {
		content: document.querySelector('.location__content'),
		preloader: document.querySelector('.location__preloader')
	},

	weather: {
		humidity: document.querySelector('.weather__details-value[data-detail-type="humid"]'),
		measures: document.querySelector('.weather__details-measure'),
		pressure: document.querySelector('.weather__details-value[data-detail-type="pres"]'),
		sunrise: document.querySelector('.weather__details-value[data-detail-type="sunr"]'),
		sunset: document.querySelector('.weather__details-value[data-detail-type="suns"]'),
		temperature: document.querySelector('.weather__details-value[data-detail-type="temp"]'),
		wind: document.querySelector('.weather__details-value[data-detail-type="wind"]'),
	}
};
