// Prompt
// Given an integer array nums consisting of n elements, and an integer k
// Find a contiguous subarray whose length is equal to k that has the maximum average value
// return this value.
// Any answer with a calculation error less than 10^-5 will be accepted.
// k < n

const findMaxAverage = (nums: number[], k: number): number => {
  let maxAverage: number = 0;
  let right = k - 1;
  let sum = 0;
  let firstOut: number = 0;
  // iterate through nums
  for (let i = 0; i <= nums.length - k; i++) {
    // window left bound is i and right bound i + k - 1
    if (i === 0) {
      // calculate first subarray sum
      const sub = nums.slice(i, right + 1);
      firstOut = sub[0];
      sum = sub.reduce((acc, n) => (n += acc), 0);
      maxAverage = sum / k;
    } else {
      // slide window
      right += 1;
      // window slid, remove firstOut from sum
      sum -= firstOut;
      // replace firstOut with new first item in subarray
      firstOut = nums[i];
      sum += nums[right];
      maxAverage = Math.max(maxAverage, sum / k);
    }
  }
  return maxAverage;
};

// test cases
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(findMaxAverage([5], 1)); // 5
console.log(Math.floor(Math.random() * 10));
