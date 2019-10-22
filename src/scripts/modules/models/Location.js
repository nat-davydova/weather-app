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

		} catch(e) {

		}

	}
};