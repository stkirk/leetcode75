// Climb a staircase with n stairs to reach the top
// Each movement up can be taken 1 or 2 steps at a time
// how many distinct ways can the staircase be climbed?

function climbStairs(n: number): number {
  // BRUTE FORCE RECURSIVE SOLUTION
  // start on step 0 -> i
  // each step is a decision tree where you can take 1 or 2 steps as long as
  // the step keeps you in bounds, <= n
  let paths = 0;
  const recursivelyClimb = (step: number): number | undefined => {
    // base case: step > n return 0
    if (step > n) {
      return;
    }
    // step === n, found a path, return 1
    else if (step === n) {
      paths += 1;
      return;
    } else {
      // step < n, keep climbing
      recursivelyClimb(step + 1);
      recursivelyClimb(step + 2);
    }
  };
  recursivelyClimb(0);
  return paths;
}

function climbStairsDP(n: number): number {
  // Dynamic Programming solution -> O(n) time complexity
  // starting at top step, only one path to top
  // same with second to top step
  // these are the sub problems we can keep a running tally on already computed solutions
  // starting with one and two variables (top and 2nd to top ways) at n and n - 1
  // loop backwards, keeping running tally until one variable gets to 0 (landing step)
  let one = 1;
  let two = 1;
  for (let i = n - 2; i >= 0; i--) {
    // store one in temp variable
    const curOne = one;
    // add two previous values
    one = one + two;
    // shift two to prev value of 1
    two = curOne;
  }
  return one;
}

// console.log(climbStairs(2)); // 2
// console.log(climbStairs(3)); // 3
// console.log(climbStairs(5)); // 8

console.log(climbStairsDP(2)); // 2
console.log(climbStairsDP(3)); // 3
console.log(climbStairsDP(5)); // 8
