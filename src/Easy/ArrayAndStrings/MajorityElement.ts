// Given an array, nums, of size n
// return the majority element
// Majority element: element that appears > n / 2 times
// majority element is more than half of n

const findMajorityElement = (nums: number[]): number | null => {
  // edge case: only 1 element in array, return it
  if (nums.length === 1) {
    return nums[0];
  }
  // initialize empty hashmap with number: count for each num in nums
  const numCounts: { [key: number]: number } = {};
  const majorityThreshold = nums.length / 2;
  // loop through nums
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // if num in numCounts map, increment it
    if (numCounts[num]) {
      numCounts[num] += 1;
      // check if count > n / 2
      if (numCounts[num] > majorityThreshold) {
        // if it is, return num
        return num;
      }
    } else {
      // else num not yet in numCounts
      // initialize its count to 1
      numCounts[num] = 1;
    }
  }
  // no majority element, return -1
  return null;
};

console.log(findMajorityElement([3, 2, 3])); // 3
console.log(findMajorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(findMajorityElement([1])); // 1
