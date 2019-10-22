//rendering errors in the UI
export const handleError = (errorText, placeToRender) => {

	placeToRender.textContent = errorText;

};

//removing content from the UI
export const clearUI = placeToClear => {

	placeToClear.innerHTML = '';
	placeToClear.textContent = '';

};

//show preloader
export const showPreloader = preloader => {
	preloader.classList.remove('js-hidden');
};

//hide preloader
export const hidePreloader = preloader => {
	preloader.classList.add('js-hidden');
};