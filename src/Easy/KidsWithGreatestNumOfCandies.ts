// Prompt:
// Given an integer array candies of length n, representing the number of candies a kid has
// candies[i] represents the number of candies the ith kid has
// and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n
// where result[i] is true if after giving the ith kid all the extraCandies
// they will have the greatest number of candies among all the kids, or false otherwise.

const kidsWithCandies = (
  candies: number[],
  extraCandies: number
): boolean[] => {
  const result: boolean[] = [];
  let max: number = 0;
  // find the current max in candies[]
  candies.forEach((candyCount) => {
    if (candyCount > max) {
      max = candyCount;
    }
  });
  // iterate through candies, if candies[i] >= max append true to results
  candies.forEach((candyCount) => {
    if (candyCount + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  });
  // else append false
  return result;
};

// test cases:
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); //-> [true,true,true,false,true]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); //-> [true,false,false,false,false]
console.log(kidsWithCandies([12, 1, 12], 10)); //-> [true,false,true]
