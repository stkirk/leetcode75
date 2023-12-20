// Prompt
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

const isSubsequence = (s: string, t: string): boolean => {
  const sStack = s.split("");
  // loop through t, compare chars of t to first char of s, shift if match
  for (let i = 0; i < t.length; i++) {
    const curT = t[i];
    if (curT === sStack[0]) {
      sStack.shift();
    }
  }
  // if s is empty at the end, return true
  return sStack.length === 0;
};

// two pointer solution
const isSubsequence2 = (s: string, t: string): boolean => {
  // pointer for chars of s, increment on found chars
  let i = 0;

  for (let j = 0; j < t.length; j++) {
    if (t[j] === s[i]) {
      i++;
    }
  }
  // if its a subsequence i should equal s.length since all chars would have been found
  return i === s.length;
};

// test cases
// console.log(isSubsequence("abc", "ahbgdc")); // true
// console.log(isSubsequence("axc", "ahbgdc")); // false
// console.log(isSubsequence("aec", "abcde")); // false

console.log(isSubsequence2("abc", "ahbgdc")); // true
console.log(isSubsequence2("axc", "ahbgdc")); // false
console.log(isSubsequence2("aec", "abcde")); // false
