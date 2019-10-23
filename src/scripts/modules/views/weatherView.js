//import DOM from configs
import { DOM } from './../configs/path';

//render weather item into the DOM - helper function
const renderWeatherItem = (item, uiElem) => {
	uiElem.textContent = item;
};

//pick proper weather icon based on weather title and time
const weatherIcon = (weatherType, localHours, sunset) => {

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
			if (localHours < sunset) {
				icon = 'clear-sky'
			} else {
				icon = 'clear-sky-night'
			}
			break;

		case 'Few Clouds':
			if (localHours < sunset) {
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
	const [ sunrHours, sunrMins ] = weatherObj.sunrise;

	renderWeatherItem(`${sunrHours}:${sunrMins}`, DOM.weather.sunrise);

	//render sunset
	const [ sunsHours, sunsMins ] = weatherObj.sunset;

	renderWeatherItem(`${sunsHours}:${sunsMins}`, DOM.weather.sunset);

	//render weather title
	renderWeatherItem(weatherObj.weatherTitle, DOM.weather.title);

	//render icon
	const iconName = weatherIcon(weatherObj.weatherTitle, dateObj.hours, weatherObj.sunset[0]);

	const icon = `
		<svg>
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