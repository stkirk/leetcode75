// Prompt
// You are given an integer array height of length n. There are n vertical lines drawn
// such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container,
// such that the container contains the most water.
// Return the maximum amount of water a container can store.

const getMaxArea = (height: number[]): number => {
  // left pointer and right pointer representing the bounds of the container
  // starting with widest container possible
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  // loop through height[], each iteration is a potential new container to
  // compare to the old container
  while (left < right) {
    const w = right - left;
    const h = Math.min(height[left], height[right]);
    const area = w * h;
    maxArea = Math.max(maxArea, area);
    if (height[left] >= height[right]) {
      // right is limiting factor, move it towards left
      right--;
    } else {
      // left is limiting factor, move toward right
      left++;
    }
  }
  return maxArea;
};

// test cases
console.log(getMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //-> 49
console.log(getMaxArea([1, 1])); //-> 1
