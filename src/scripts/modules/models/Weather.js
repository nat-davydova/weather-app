import axios from 'axios';
import { weatherApi } from './../configs/apiKeys';

//*** WEATHER PART
export default class Weather {

	constructor(degreesType) {
		this.degreesType = degreesType;
	}

	//convert time elems from unix to readable date
	static convertFromUnix = (unix) => {

		const date = new Date(unix * 1000);

		const hours = date.getHours();

		const mins =  date.getMinutes();

		return [hours, mins];

	};

	getWeather = async (lat, long) => {

		try {

			const weatherCast = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${weatherApi}&units=metric`);

			//grabbing main weather data
			this.idWeather = weatherCast.data.weather[0].id;

			//grabbing additional weather data
			this.humidity = weatherCast.data.main.humidity; //in %
			this.wind = weatherCast.data.wind.speed; //in m/s
			this.pressure = weatherCast.data.main.pressure; //in hPA
			this.temperature = weatherCast.data.main.temp; //in Celcius
			this.sunrise = Weather.convertFromUnix(weatherCast.data.sys.sunrise); //initially in unix
			this.sunset = Weather.convertFromUnix(weatherCast.data.sys.sunset); //initially in unix

		} catch (e) {

			this.weatherError = `Sorry! We can't define your weather :(`;

			console.log(e);

		}


	};

	convertTemperature = () => {

		let newTemperature;

		if (this.degreesType === 'C') {

			newTemperature = (this.temperature * 9/5) + 32;

			this.degreesType = 'F';

		} else {

			newTemperature = (this.temperature - 32) * 5/9;

			this.degreesType = 'C';

		}

		this.temperature = newTemperature;

	};

	//handling weather title from id
	weatherTitle = () => {

		if (this.idWeather >= 200 && this.idWeather <= 232) {

			this.weatherTitle = 'Thunderstorm'

		} else if ((this.idWeather >= 300 && this.idWeather <= 321) || this.idWeather === 500 || this.idWeather === 501) {

			this.weatherTitle = 'Rain'

		} else if (this.idWeather >= 502 && this.idWeather <= 531) {

			this.weatherTitle = 'Shower Rain'

		} else if (this.idWeather >= 600 && this.idWeather <= 622) {

			this.weatherTitle = 'Snow'

		} else if (this.idWeather >= 701 && this.idWeather <= 781) {

			this.weatherTitle = 'Fog'

		} else if(this.idWeather === 800) {

			this.weatherTitle = 'Clear Sky'

		} else if(this.idWeather === 801) {

			this.weatherTitle = 'Few Clouds'

		} else if(this.idWeather === 802) {

			this.weatherTitle = 'Scattered Clouds'

		} else if(this.idWeather === 803 || this.idWeather === 804) {

			this.weatherTitle = 'Broken Clouds'

		}

	};

};