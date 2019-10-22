import axios from 'axios';
import { weatherApi } from './../configs/apiKeys';

//*** WEATHER PART
export default class Weather {

	constructor() {

	}

	getWeather = async (lat, long) => {

		const weather = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${weatherApi}`);

		console.log(weather);

	};

};