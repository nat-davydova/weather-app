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
		convertBtn: document.querySelector('.weather__temp-switcher'),
		humidity: document.querySelector('.weather__details-value[data-detail-type="humid"]'),
		icon: document.querySelector('.weather__icon'),
		info: document.querySelector('.weather__info'),
		measures: document.querySelector('.weather__details-measure'),
		pressure: document.querySelector('.weather__details-value[data-detail-type="pres"]'),
		preloader: document.querySelector('.weather__preloader'),
		sunrise: document.querySelector('.weather__details-value[data-detail-type="sunr"]'),
		sunset: document.querySelector('.weather__details-value[data-detail-type="suns"]'),
		temperature: document.querySelector('.weather__details-value[data-detail-type="temp"]'),
		title: document.querySelector('.weather__title'),
		wind: document.querySelector('.weather__details-value[data-detail-type="wind"]'),
	},

	reload: document.querySelector('.reload-weather__btn')
};
