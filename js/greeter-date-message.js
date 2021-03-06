class GreeterDateMessage {

	constructor() {
		this._greeterMessage = document.querySelector('#greeterMessage');	
		this._dateMessage = document.querySelector('#dateMessage');	

		this._updateGreeterDateMessage();
	}

	_getMonths = () => {
		const monthsArr = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		return monthsArr;
	}

	_getDays = () => {
		const _daysArr = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		];
		return _daysArr;
	}

	_getDayOrdinal = (day) => {
		return day + (day > 0 ? ['th', 'st', 'nd', 'rd'][(day > 3 && day < 21) ||
			day % 10 > 3 ? 0 : day % 10] : '');
	}

	_updateGreeterDateMessage = () => {

		const date = new Date();
		const hour = date.getHours();
		let greeterSuffix = '';

		if (hour >= 6 && hour < 12) {
			greeterSuffix = 'Morning';

		} else if (hour >= 12 && hour < 18) {
			greeterSuffix = 'Afternoon';

		} else {
			greeterSuffix = 'Evening';
		}

		this._greeterMessage.innerHTML = `Good<br>${greeterSuffix}!`;
		this._dateMessage.innerHTML = `Today's the ${this._getDayOrdinal(date.getDate())} of ` +
									`${this._getMonths()[date.getMonth()]}, and it's ${this._getDays()[date.getDay()]}.`;
	}

}