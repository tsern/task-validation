var ageElement;
var usernameElement;
var dateElement;

window.onload = function() {
	// add form
	var validationForm = document.createElement('form');
	document.body.appendChild(validationForm);

	// add age element
	ageElement = document.createElement('input');
	ageElement.type = 'text';
	ageElement.name = 'age';
	ageElement.placeholder = '0';
	validationForm.appendChild(ageElement);
	
	// add username element
	usernameElement = document.createElement('input');
	usernameElement.type = 'text';
	usernameElement.name = 'username';
	usernameElement.placeholder = 'user_tania';
	validationForm.appendChild(usernameElement);
	
	// add date element
	dateElement = document.createElement('input');
	dateElement.type = 'text';
	dateElement.name = 'date';
	dateElement.placeholder = 'dd/mm/yyyy';
	validationForm.appendChild(dateElement);
	
	// add submit element
	var submitElement = document.createElement('input');
	submitElement.type = 'submit';
	submitElement.value = 'Validate Me';
	submitElement.onclick = validateForm;
	validationForm.appendChild(submitElement);
}

function validateForm(event) {
	if (!validateNumbersOnly(ageElement.value)) {
		alert('your age is invalid');
	}
	if (!validateUsername(usernameElement.value)) {
		alert('your name is invalid');
	}
	if (!validateDate(dateElement.value)) {
		alert('your data is invalid');
	}
	event.preventDefault();
}

function validateNumbersOnly(str) {
	var result = /^\d+$/.test(str);
	return result;
}

function validateUsername(str) {
	var result = /^user_.*$/.test(str);
	return result;
}

function validateDate(str) {
	var result = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(str);
	
	if (result) {
		var dateSpl = str.split('/');
		var formatStr = dateSpl[2] + '-' + dateSpl[1] + '-' + dateSpl[0];
		var curDate = new Date();
		var dateFromStr = new Date(formatStr);
		
	if (curDate.getDay() == dateFromStr.getDay() && 		    curDate.getMonth() == dateFromStr.getMonth() &&		    curDate.getYear() == dateFromStr.getYear()) {
	   return true;
		}
	}
	
	return false;
}
