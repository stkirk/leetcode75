// Prompt:
// Given an integer array nums, return true if there exists a triple of indices (i, j, k)
// such that i < j < k and nums[i] < nums[j] < nums[k].
// If no such indices exists, return false.

// Strategy:
// Step 1 loop forward finding the lowest number occurring before each index
// Step 2 loop backward finding the max number occuring after each index
// Step 3 loop through nums, check if min before is less and max after is greater

const increasingTriplet = (nums: number[]): boolean => {
  if (nums.length < 3) {
    return false;
  }
  const leftMins: number[] = [];
  const rightMaxes: number[] = [];
  // 1st loop, find the minNumber inclusive of i
  let min: number | undefined;
  for (let i = 0; i < nums.length; i++) {
    const cur: number = nums[i];
    if ((!min && min !== 0) || cur < min) {
      min = cur;
      leftMins.push(min);
    } else {
      // cur > min -> push min
      leftMins.push(min);
    }
  }
  // 2nd loop backwards for rightMaxes
  let max: number | undefined;
  for (let i = nums.length - 1; i >= 0; i--) {
    const cur = nums[i];
    if ((!max && max !== 0) || cur > max) {
      max = cur;
      rightMaxes.push(max);
    } else {
      // current max > cur so push current max
      rightMaxes.push(max);
    }
  }
  rightMaxes.reverse();
  console.log("leftMins", leftMins);
  console.log("rightMaxes", rightMaxes);
  // 3rd loop check for subsequence
  for (let i = 1; i < nums.length - 1; i++) {
    const leftMin = leftMins[i];
    const cur = nums[i];
    const rightMax = rightMaxes[i];
    if (cur > leftMin && cur < rightMax) {
      return true;
    }
  }
  return false;
};

// test cases
console.log(increasingTriplet([1, 2, 3, 4, 5])); //-> true
console.log(increasingTriplet([5, 4, 3, 2, 1])); //-> false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); //-> true
console.log(increasingTriplet([20, 100, 10, 100, 12, 5, 13])); //-> true
console.log(increasingTriplet([1, 5, 0, 4, 1, 3])); //-> true
