// Given an array of ints, nums, and an integer, target
// in an array return the indicies of the two numbers such that they add up to target
// assume each input has exactly one solution
// the same element cannot be used twice
// return the answer in any order

function twoSum(nums: number[], target: number): number[] {
  const complements: { [key: number]: number } = {};
  // create hashmap of complements for each num and its index in nums
  nums.forEach((num, index) => {
    const complement = target - num;
    complements[complement] = index;
  });
  console.log("complements", complements);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in complements && i !== complements[nums[i]]) {
      return [i, complements[nums[i]]];
    }
  }
  return [-1];
}

// test cases:
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
