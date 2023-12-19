// Prompt
// Given an integer array nums:
// move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// must do this in-place without making a copy of the array

const moveZeroes = (nums: number[]): void => {
  console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]); //-> [1,3,12,0,0]
moveZeroes([0]); //-> [0]
