// Given n versions of a product
// and a provided function that evaluates if a version is bad, isBadVersion
// find the first bad version, minimizing the number of API calls to isBadVersion

type BadVersionAPI = (version: number, target: number) => boolean;
// fake API to find bad version
const isBadVersionAPI: BadVersionAPI = (version, target) => {
  return version === target;
};

function findBadVersion(
  isBadVersion: BadVersionAPI,
  target: number
): (n: number) => number {
  return (n) => {
    // perform binary search to find bad version
    // init left pointer at 1
    let left = 1;
    // init right pointer at n
    let right = n;
    // while loop, l < r
    while (left < right) {
      // find midpoint at l + r // 2
      const midPoint = Math.floor((left + right) / 2);
      // check isBadVersion at midpoint
      const isCurBad = isBadVersion(midPoint, target);
      // if version is bad, we need to look earlier
      if (isCurBad) {
        // right = midpoint
        right = midPoint;
      } else {
        // version is good, look forward
        left = midPoint + 1;
      }
    }
    // loop finishes, left pointer on bad version
    if (isBadVersion(left, target)) {
      return left;
    }
    return -1;
  };
}

const test1 = findBadVersion(isBadVersionAPI, 4);
console.log(test1(5));
const test2 = findBadVersion(isBadVersionAPI, 1);
console.log(test2(1));
const test3 = findBadVersion(isBadVersionAPI, 1);
console.log(test3(2));
