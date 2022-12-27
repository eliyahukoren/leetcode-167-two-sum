module.exports = twoSum = function (nums, target) {
	let start = 0;
	let length = nums.length;
	const res = [];
	const exc = {};

	while (start < length - 1) {
		if (exc[nums[start]] !== undefined) {
			start++;
			continue;
		}

		for (let i = start + 1; i < length; i++) {
			if (nums[start] + nums[i] == target) {
				res.push(...res, start + 1, i + 1);
			}

			exc[nums[start]] = nums[start];
		}
		start++;
	}

	return res;
};
