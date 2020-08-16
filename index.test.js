import * as index from "./index";

test("test if input is a string", () => {
	expect(typeof index.capitalize("string")).toBe("string");
	expect(typeof index.reverseString("string")).toBe("string");
});

test("capitalize first character of a string", () => {
	expect(index.capitalize("string")).toMatch("String");
});

test("returns the string as reversed", () => {
	expect(index.reverseString("string")).toMatch("gnirts");
});

test("calculator functions work", () => {
	expect(index.calculator.add(1, 1)).toEqual(2);
	expect(index.calculator.subtract(3, 1)).toEqual(2);
	expect(index.calculator.divide(4, 2)).toEqual(2);
	expect(index.calculator.multiply(2, 1)).toEqual(2);
});

test("is an object", () => {
	expect(typeof index.arrayOfObjs([1, 8, 3, 4, 2, 6])).toBe("object");
});
test("objects equal these values", () => {
	expect(index.arrayOfObjs([1, 8, 3, 4, 2, 6])).toEqual({
		avg: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});
test("contains the keys", () => {
	expect(Object.keys(index.arrayOfObjs([1, 8, 3, 4, 2, 6]))).toContain(
		"avg",
		"min",
		"max",
		"length"
	);
});
