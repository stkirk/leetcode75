// Given an array of numbers, nums:
// remove duplicates in-place, such that each unique number only appears once
// relative order should be kept the same
// unique number of elements is k
// Change the array such that the first k elements contain unique
// elements in the that were present initially
// the remaining elements are unimportant, as well as the size of nums
export function removeDuplicates(nums: number[]): number {
  // need a pointer for left, init at 0 this will hold index of current unique
  let left = 0;
  // pointer for right, will increment if nums[right] === to nums[left]
  let right = 1;
  // keep track of current unique num, init nums[left]
  // let uniqueNum = nums[left];
  // while loop as long as right < nums.length
  // edge case: nums end in duplicates,
  while (right < nums.length) {
    // cur = nums[right]
    const cur = nums[right];
    // if cur === uniqueNum
    if (cur !== nums[left]) {
      console.log("before splice", { nums, left, right });
      // we have a new unique number or run out of numbers
      // splice out from left(non-inclusive) to right(non-inclusive)
      nums.splice(left + 1, right - (left + 1));
      // reset pointers
      // left = right - left
      left = left + 1;
      // right = left + 1
      right = left + 1;
      // unique num = cur
      console.log("after splice", { nums, left, right });
    } else if (right + 1 > nums.length - 1) {
      // right is out of bounds on next loop
      //  and we still have duplicates from left -> right
      nums.splice(left + 1, right - left);
    } else {
      // they are duplicates  and there is a next index for window
      // increment right
      console.log("before increment right", { left, right });
      right += 1;
      console.log("after increment right", { nums, left, right });
    }
  }

  return nums.length;
}
