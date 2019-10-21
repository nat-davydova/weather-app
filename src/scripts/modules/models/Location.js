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

			const { coords } = await getCoords();

			console.log(coords);

		} catch(e) {

		}

	}
};