// Prompt
// Given an integer array nums:
// move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// must do this in-place without making a copy of the array

const moveZeroes = (nums: number[]): void => {
  let left = 0;
  let right = 1;
  // while loop as long as left is in bounds
  while (right < nums.length) {
    const curLeft = nums[left];
    const curRight = nums[right];
    if (curLeft === 0) {
      // find a 0, increment right until you find a number then swap them
      if (curRight !== 0) {
        // swap zero to the right, number to the left
        nums[left] = nums[right];
        nums[right] = 0;
        // reset left and right to next index after swap point
        left++;
        right = left + 1;
      } else {
        right++;
      }
    } else {
      // left not on 0, leave nums alone
      left++;
      right++;
    }
  }
  console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]); //-> [1,3,12,0,0]
moveZeroes([0, 1, 0, 0, 12]); //-> [1,12,0,0,0]
moveZeroes([0]); //-> [0]
