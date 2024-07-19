// Given a number, n, return true if n is a 'happy' number and false otherwise
// happy is defined as:
// starting with a positive integer replaced by the sum of the square of its digits
// repeating this process until the number equals 1
// or it loops endlessly in a cycle that doesn't equal 1
// numbers where this process end in 1 are happy
export function isHappy(n: number): boolean {
  // hashmap to contain whether we've seen cur or not
  const seen: { [key: number]: boolean } = {};
  // if a number repeats AND that repeating number is NOT 1, return false
  // while loop as long !seen[cur]
  while (!seen[n]) {
    // add first number current n to seen
    seen[n] = true;
    // turn number into string and split it into array of single digit numbers
    const singleDigits = n
      .toString()
      .split("")
      .map((digit) => Number(digit));
    // square and sum each single digit number, .reduce
    const sumOfSquares = singleDigits.reduce((acc, curDigit) => {
      return acc + curDigit ** 2;
    }, 0);
    // assign result to n
    n = sumOfSquares;
  }
  // loop ends
  return n === 1;
}
