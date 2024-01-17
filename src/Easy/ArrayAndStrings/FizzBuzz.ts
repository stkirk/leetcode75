// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

const fizz = "Fizz";
const buzz = "Buzz";
const fizzBuzz = "FizzBuzz";

const getFizzBuzz = (n: number): string[] => {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    const isFactorOfThree = i % 3 === 0;
    const isFactorOfFive = i % 5 === 0;
    if (isFactorOfThree && isFactorOfFive) {
      result.push(fizzBuzz);
    } else if (isFactorOfThree) {
      result.push(fizz);
    } else if (isFactorOfFive) {
      result.push(buzz);
    } else {
      result.push(i.toString());
    }
  }
  return result;
};

// test cases:
console.log(getFizzBuzz(3)); // ["1","2","Fizz"]
console.log(getFizzBuzz(5)); // ["1","2","Fizz","4","Buzz"]
console.log(getFizzBuzz(15)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
