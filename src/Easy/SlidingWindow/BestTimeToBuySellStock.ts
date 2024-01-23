// Prompt:
// Given an array of prices where prices[i] is the price of a stock on the ith day
// choose the best day to buy and sell the stock to make a maximum profit
// return the max profit you can achieve, if no profit is possible return 0

const calculateMaxProfit = (prices: number[]): number => {
  let maxProfit = 0;
  let left: number = 0;

  // loop through, window bound by left and i
  // record profit as max of right - left and current max
  // only move left pointer if it is less at right pointer
  for (let i = 1; i < prices.length; i++) {
    const curProfit = prices[i] - prices[left];
    maxProfit = Math.max(maxProfit, curProfit);
    if (prices[i] <= prices[left]) {
      left = i;
    }
  }
  return maxProfit;
};

// test cases:
console.log(calculateMaxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(calculateMaxProfit([7, 6, 4, 3, 1])); // 0
