import axios from 'axios';
import { weatherApi } from './../configs/apiKeys';

//*** WEATHER PART
export default class Weather {

	constructor(degreesType) {
		this.degreesType = degreesType;
	}

	getWeather = async (lat, long) => {

		try {

			const weatherCast = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${weatherApi}&units=metric`);

			//grabbing main weather data
			this.typeWeather = weatherCast.data.weather[0].main;
			this.idWeather = weatherCast.data.weather[0].id;

			//grabbing additional weather data
			this.humidity = weatherCast.data.main.humidity; //in %
			this.wind = weatherCast.data.wind.speed; //in m/s
			this.pressure = weatherCast.data.main.pressure; //in hPA
			this.temperature = weatherCast.data.main.temp; //in Celcius
			this.sunrise = weatherCast.data.sys.sunrise; //UTC
			this.sunset = weatherCast.data.sys.sunset; //UTC

			console.log(weatherCast);

		} catch (e) {

			this.weatherError = `Sorry! We can't define your weather :(`;

			console.log(e);

		}


	};

};