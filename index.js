function capitalize(string) {
	if (typeof string === "string") {
		return string[0].toUpperCase() + string.slice(1);
	} else {
		throw new Error("Needs to be a string");
	}
}

function reverseString(string) {
	if (typeof string === "string") {
		return string.split("").reverse().join("");
	} else {
		throw new Error("Needs to be a string");
	}
}

const calculator = (() => {
	function add(a, b) {
		return a + b;
	}
	function subtract(a, b) {
		return a - b;
	}
	function divide(a, b) {
		return a / b;
	}
	function multiply(a, b) {
		return a * b;
	}
	return {
		add,
		subtract,
		divide,
		multiply,
	};
})();

const caeser = (string, shift) => {
	let encoded = "";
	for (let i = 0; i < string.length; i++) {
		let charCode = string.charCodeAt(i);
		if (charCode >= 65 && charCode <= 90) {
			charCode = charCode - 65;
			charCode = modulo(charCode + shift);
			charCode = charCode + 65;
		} else if (charCode >= 97 && charCode <= 122) {
			charCode = charCode - 97;
			charCode = modulo(charCode + shift);
			charCode = charCode + 97;
		}
		encoded += String.fromCharCode(charCode);
	}

	function modulo(charCodeWithShift) {
		if (charCodeWithShift < 0) {
			charCodeWithShift = 26 - (Math.abs(charCodeWithShift) % 26);
		}
		return charCodeWithShift % 26;
	}

	return encoded;
};

const arrayOfObjs = (array) => {
	let avg = array.reduce((acc, cur) => acc + cur / array.length);
	let min = Math.min(...array);
	let max = Math.max(...array);
	let length = array.length;
	return {
		avg: Math.floor(avg),
		min: min,
		max: max,
		length: length,
	};
};

export { capitalize, reverseString, calculator, caeser, arrayOfObjs };
