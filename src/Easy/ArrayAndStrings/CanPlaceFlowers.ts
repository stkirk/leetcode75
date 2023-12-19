// Prompt:
// You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.
// Given an integer array `flowerbed` containing 0's and 1's, where 0 means empty and 1 means not empty
// and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule
// return false otherwise.

const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
  // init countdown starting at n for flowers planted
  let remainingFlowers = n;
  // loop through flowerbed
  flowerbed.forEach((plot, i) => {
    // if remaining flowers = 0 return true
    if (remainingFlowers === 0) {
      return true;
    }
    const prevOpen = !flowerbed[i - 1];
    const nextOpen = !flowerbed[i + 1];
    // if no flowers before or after place one and decrement remainder
    if (!plot && prevOpen && nextOpen) {
      remainingFlowers -= 1;
      // fill the plot
      flowerbed[i] = 1;
    }
  });
  return remainingFlowers <= 0 ? true : false;
};

// test cases:
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); //-> true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); //-> false
