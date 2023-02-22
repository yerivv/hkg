console.log('form');

const d = new Date();
const year = d.getFullYear();
const month = d.getMonth();
const day = d.getDate();

const period = {
	init(b, c){
		let today = new Date(year, month, day).toLocaleDateString();
		document.querySelector('#endDate').value = today;
		period.select('', b, c);
	},
	select(a, b, c){
		let newDate;
		switch(b){
			case 'day':
				newDate = new Date().setDate(day - c);
				break;
			case 'month':
				newDate = new Date().setMonth(month - c);
				break;
			case 'year':
				newDate = new Date().setYear(year - c);
				break;
			case 'input':
				newDate = new Date().setYear(year - c);
				break;
		}
		//a.checked = true;
		document.querySelector('#startDate').value = new Date(newDate).toLocaleDateString();
	}
}