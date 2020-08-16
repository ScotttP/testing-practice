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
	function shiftLogic(char) {
		if (char >= 65 && char <= 90) {
			if (char > 90) {
				char = char - 90 + 64;
			} else if (char < 65) {
				char = 91 - (65 - char);
			}
		} else if (char >= 97 && char <= 122) {
			if (char > 122) {
				char = char - 122 + 96;
			} else if (char < 97) {
				char = 123 - (97 - char);
			}
		}
		return char;
	}
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
