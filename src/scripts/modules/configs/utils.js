//rendering errors in the UI
export const handleError = (errorText, placeToRender) => {

	placeToRender.textContent = errorText;

};

//removing content from the UI
export const clearUI = (placeToClear) => {

	placeToClear.innerHTML = '';
	placeToClear.textContent = '';

};