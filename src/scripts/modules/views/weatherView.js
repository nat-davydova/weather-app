//import DOM from configs
import { DOM } from './../configs/path';

//render weather item into the DOM - helper function
const renderWeatherItem = (item, uiElem) => {
	uiElem.textContent = item;
};

//convert 1-digit numbers to 2-digits numbers
const twoDigitsConvert = (elem) => (`0${elem}`);

//pick proper weather icon based on weather title and time
const weatherIcon = (weatherType, localHours, sunset, sunrise) => {

	let icon;

	switch(weatherType) {

		case 'Thunderstorm':
			icon = 'thunderstorm';
			break;

		case 'Rain':
			icon = 'rain';
			break;

		case 'Shower Rain':
			icon = 'shower-rain';
			break;

		case 'Snow':
			icon = 'snow';
			break;

		case 'Fog':
			icon = 'mist';
			break;

		case 'Clear Sky':
			if (localHours < sunset && localHours > sunrise) {
				icon = 'clear-sky'
			} else {
				icon = 'clear-sky-night'
			}
			break;

		case 'Few Clouds':
			if (localHours < sunset && localHours > sunrise) {
				icon = 'few-clouds'
			} else {
				icon = 'few-clouds-night'
			}
			break;

		case 'Scattered Clouds':
			icon = 'scattered-clouds';
			break;

		case 'Broken Clouds':
			icon = 'broken-clouds';
			break;

		default:
			icon = 'thermometer';
			break;
	}

	return icon;

};

//render weather
export const renderWeather = (weatherObj, dateObj) => {

	//render wind
	renderWeatherItem(`${weatherObj.wind}m/s`, DOM.weather.wind);

	//render humidity
	renderWeatherItem(`${weatherObj.humidity}%`, DOM.weather.humidity);

	//render pressure
	renderWeatherItem(`${weatherObj.pressure}hPA`, DOM.weather.pressure);

	//render sunrise
	let [ sunrHours, sunrMins ] = weatherObj.sunrise;

	sunrHours < 10 ? sunrHours = twoDigitsConvert(sunrHours) : sunrHours;
	sunrMins < 10 ? sunrMins = twoDigitsConvert(sunrMins) : sunrMins;

	renderWeatherItem(`${sunrHours}:${sunrMins}`, DOM.weather.sunrise);

	//render sunset
	let [ sunsHours, sunsMins ] = weatherObj.sunset;

	sunsHours < 10 ? sunsHours = twoDigitsConvert(sunsHours) : sunsHours;
	sunsMins < 10 ? sunsMins = twoDigitsConvert(sunsMins) : sunsMins;

	renderWeatherItem(`${sunsHours}:${sunsMins}`, DOM.weather.sunset);

	//render weather title
	renderWeatherItem(weatherObj.weatherTitle, DOM.weather.title);

	//render icon
	const iconName = weatherIcon(weatherObj.weatherTitle, dateObj.hours, weatherObj.sunset[0], weatherObj.sunrise[0]);

	const icon = `
		<svg xmlns="http://www.w3.org/2000/svg">
         	<use xlink:href="./assets/sprites/sprites-colored/svg/sprite.symbol.svg#${iconName}" >
		</svg>
	`;

	DOM.weather.icon.insertAdjacentHTML("beforeend", icon);

};

//render temperature
export const renderTemperature = (currentTemp, degreesType) => {

	const temperature = Math.round(parseFloat(currentTemp));

	//render temperature
	renderWeatherItem(`${temperature}°`, DOM.weather.temperature);

	//render degrees type
	renderWeatherItem(degreesType, DOM.weather.measures);

	//switch label on converting btn
	degreesType === 'C' ? DOM.weather.convertBtn.textContent = 'F' : DOM.weather.convertBtn.textContent = 'C';

};