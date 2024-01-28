// Given an array of integers, nums, that is sorted in ascending order
// and an integer, target
// write a function to find target in nums
// if target exists, return its index else return -1
// function must run in O(log n) runtime complexity

const binarySearch = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length;
  while (left <= right) {
    const guessIndex = Math.floor((left + right) / 2);
    const guess = nums[guessIndex];
    if (guess === target) {
      return guessIndex;
    }
    // if guess > target, move right bound left
    if (guess > target) {
      right = guessIndex - 1;
    } else {
      // guess < target, move left bound right
      left = guessIndex + 1;
    }
  }
  return -1;
};

// test cases
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(binarySearch([-1, 0, 3, 5, 9, 12], -1)); // 0
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2)); // -1
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 12)); // 5
