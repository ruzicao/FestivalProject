﻿function NameInput(id, length) {
	var element = $(id);
	if (element === null || element === undefined) {
		return false;
	}
	if (element.val().length < length) {
		return false;
	} else {
		return true;
	}
}

function YearInput(id, min) {
	var element = $(id);
	if (element === null || element === undefined || isNaN(+element.val()) || +element.val() % 1 !== 0) {
		return false;
	}
	var date = new Date();
	var maxDate = date.getFullYear() - 2;
	if (+element.val() < min || +element.val() > maxDate) {
		return false;
	} else {
		return true;
	}
}

function onBlurText(id, length) {
	if (NameInput(id, length)) {
		changeClass(id + "Error", "hidden");
	} else {
		changeClass(id + "Error", "shown");
	}
}

function onBlurNumber(id, min) {
	if (YearInput(id, min)) {
		changeClass(id + "Error", "hidden");
	} else {
		changeClass(id + "Error", "shown");
	}
}

function onFocus(id) {
	changeClass(id + "Error", "hidden");
}

function changeClass(id, value) {
	$(id).attr("class", value);
}

function getValue(id) {
	return $(id).val();
}

function buttonClicked() {
	var validproductName = NameInput("#eventName", 6);
	if (!validproductName) {
		changeClass("#eventNameError", "shown");
	}


	var validYear = YearInput("#eventYear", 1950);
	if (!validYear) {
		changeClass("#eventYearError", "shown");
	}
}

$(document).ready(function () {
	$("#btn").click(buttonClicked);

	$("#eventName").focus(function () {
		onFocus('#eventName');
	});
	$("#eventName").blur(function () {
		onBlurText('#eventName', 6);
	});
	$("#eventYear").focus(function () {
		onFocus('#eventYear');
	});
	$("#eventYear").blur(function () {
		onBlurNumber('#eventYear', 1950);
	});
});