// Given an array of integers, nums
// return true if any value appears twice
// return false is every integer is distinct

function containsDuplicate(nums: number[]): boolean {
  // create hashmap of integer: occurences from nums
  const numCount: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // if numCount[num] exists return false because it is a duplicate
    if (numCount[num]) {
      return true;
    } else {
      // else add it to the hashmap
      numCount[num] = 1;
    }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
