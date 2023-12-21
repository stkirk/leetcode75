// Prompt
// You are given an integer array nums and an integer k.
// In one operation, you can pick two numbers from the array whose sum equals k
// and remove them from the array
// Return the maximum number of operations you can perform on the array.

const maxOperations = (nums: number[], k: number): number => {
  // iterate through nums, making a complement map for each num complement:0
  const map: { [key: number]: number } = {};
  let operations: number = 0;
  nums.forEach((num) => {
    const complement = k - num;
    map[complement] = (map[complement] || 0) + 1;
  });
  // last loop find item/complement pair, decrement each from map values
  nums.forEach((num) => {
    const complement = k - num;
    if (
      map[complement] > 0 &&
      map[num] > 0 &&
      (complement !== num || map[num] > 1)
    ) {
      // increment operations count
      operations++;
      // decrement num and complement from map values
      map[num] -= 1;
      map[complement] -= 1;
    }
  });
  return operations;
};

// test cases
console.log(maxOperations([1, 2, 3, 4], 5)); // 2
console.log(maxOperations([3, 1, 3, 4, 3], 6)); // 1
