import axios from 'axios';
import { mapApi } from './../configs/apiKeys';

//*** LOCATION

//promise for HTML5 Geolocation API
const getCoords = () => {

	return new Promise(function(resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});

};

//location class
export default class Location {

	constructor() {

	}

	geolocation = async () => {

		try {

			//geolocation coords
			const coordinatesObj = await getCoords();

			const coordinates = coordinatesObj.coords;

			this.lat = coordinates.latitude;

			this.long = coordinates.longitude;

			//converting coords into location name

			const locationObj = await axios (`https://eu1.locationiq.com/v1/reverse.php?key=${mapApi}&lat=${this.lat}&lon=${this.long}&format=json`);

			this.city = locationObj.data.address.state;

			this.district = locationObj.data.address.state_district;

		} catch(e) {

			this.locationError = `We can't define your location, sorry :(`;

		}

	}
};