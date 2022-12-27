const assert = require("assert");
const twoSum = require("../index");

describe("Main tests", () => {
	it("Basic tests", () => {
		assert.deepEqual(twoSum([2, 7, 11, 15], 9), [1, 2]);
		assert.deepEqual(twoSum([2, 3, 4], 6), [1, 3]);
		assert.deepEqual(twoSum([-1, 0], -1), [1, 2]);
	})
})