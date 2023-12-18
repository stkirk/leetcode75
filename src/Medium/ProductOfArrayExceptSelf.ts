// Prompt:
// Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i]
// You must write an algorithm that runs in O(n) time
// and without using the division operation.

const productExceptSelf = (nums: number[]): number[] => {
  const leftProducts: number[] = [];
  const rightProducts: number[] = [];
  const result: number[] = [];
  // loop through and get running products going both directions
  // use 1 for multiplier of 1st/last index
  for (let i = 0; i < nums.length; i++) {
    const leftNum = nums[i - 1];
    // lastNum is nums[nums.length - 1], - i tracks the fowards loop
    // then + 1 cancels out the minus 1 and gives the number to the right
    const rightNum = nums[nums.length - i];
    if (i === 0) {
      leftProducts.push(1);
      rightProducts.push(1);
    } else {
      if (leftNum || leftNum === 0) {
        leftProducts.push(leftNum * leftProducts[i - 1]);
      }
      if (rightNum || rightNum === 0) {
        rightProducts.push(rightNum * rightProducts[i - 1]);
      }
    }
  }
  rightProducts.reverse();
  console.log("leftProducts:", leftProducts);
  console.log("rightProducts:", rightProducts);
  for (let i = 0; i < leftProducts.length; i++) {
    const leftProduct = leftProducts[i];
    const rightProduct = rightProducts[i];
    result.push(leftProduct * rightProduct);
  }
  return result;
};

// test cases
console.log(productExceptSelf([1, 2, 3, 4])); //-> [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); //-> [0,0,9,0,0]
// console.log(productExceptSelf([3, 4, 6, 1, 2])); //-> []
