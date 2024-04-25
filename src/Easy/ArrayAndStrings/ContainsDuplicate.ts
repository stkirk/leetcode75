// Given an array of integers, nums
// return true if any value appears twice
// return false is every integer is distinct

function containsDuplicate(nums: number[]): boolean {
  // create hashmap of integer: occurences from nums
  const numCount: { [key: number]: number } = {};
  nums.forEach((num) => {
    if (!numCount[num]) {
      numCount[num] = 1;
    } else {
      // num already exists in hashmap, increment count
      numCount[num] += 1;
    }
  });
  for (let num in numCount) {
    if (numCount[num] > 1) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
