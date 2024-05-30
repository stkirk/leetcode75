// Given an array of ints, nums, and an integer value, val:
// 1) remove all occurences of val in nums in place
// the order of elements in nums may be changes
// 2) return the number of elements, k, in nums that are not equal to val
// nums must be changed such that
// the first k elements in nums contain elements not equal to val
// The remaining elements of nums are not important, nor is the size of nums

export const removeElement = (nums: number[], val: number): number => {
  // left and right pointers
  let left: number = 0;
  let right: number = nums.length - 1;
  // while loop, left <= right
  while (left <= right) {
    // get nums[left]
    const leftNum = nums[left];
    // if leftNum === val
    if (leftNum === val) {
      // swap it with nums[right]
      const swappedNum = nums[right];
      nums[right] = leftNum;
      nums[left] = swappedNum;
      // decrement right
      right--;
      // if swappedNum (now should be new nums[left]) === val
      if (swappedNum === val) {
        // continue to next loop and swap again for next value toward center of nums
        continue;
      } else {
        // else swappedNum should be included in k count
        // increment left
        left++;
      }
    } else {
      // else leftNum isn't equal to val
      // increment left
      left++;
    }
  }

  return left;
};
