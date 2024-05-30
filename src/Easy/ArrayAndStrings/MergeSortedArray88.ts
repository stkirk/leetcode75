/**
 Do not return anything, modify nums1 in-place instead.
 */
// Given two arrays of integers sorted in non decreasing order, nums1 and nums2:
// merge nums2 into nums1 in place to create a single sorted array
// valid nums in nums2 1 has length m, nums2 has length n
// m denotes the number of elements in nums1 that should be merged
// the last n elements in nums1 are set to 0 as a placeholder and should be ignored
export function mergeSortedArray(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  // array to push to that will copy over to nums1
  const temp = [];
  // keep track of pointer for nums2
  let i = 0;
  let j = 0;
  // while loop nums1[i] && nums2[j] AND we haven't reached filler zeroes in nums1
  while (nums1[i] !== undefined && i < m && nums2[j] !== undefined) {
    // compare nums1[i] to nums2[j]
    const num1 = nums1[i];
    const num2 = nums2[j];
    // if num1 <= num2
    if (num1 <= num2) {
      // push num1
      temp.push(num1);
      // increment i
      i++;
    } else {
      // else num2 < num1
      // push num2
      temp.push(num2);
      // increment j
      j++;
    }
  }
  // if i < m, add rest of nums1
  for (let k = i; k < m; k++) {
    temp.push(nums1[k]);
  }
  // if j is less than nums2.length - 1
  // loop from j to nums2.length - 1
  for (let k = j; k < nums2.length; k++) {
    // push remaining nums onto copy array
    temp.push(nums2[k]);
  }
  // loop through nums1
  for (let i = 0; i < temp.length; i++) {
    // replace each num with corresponding num from copy array
    const sortedNum = temp[i];
    nums1[i] = sortedNum;
  }
  return temp;
}
