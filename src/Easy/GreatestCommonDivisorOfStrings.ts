// Prompt:
// For two strings s and t, we say "t divides s" if and only if s = t + ... + t
// i.e., t is concatenated with itself one or more times.

// Given two strings str1 and str2, return the largest string x
// such that x divides both str1 and str2.

const gcdOfStrings = (str1: string, str2: string): string => {
  // split string 1 by successively smaller slices of string2
  // if both being split by that smaller slice of string2 have length of 0
  // update gcd if stringSlice.length longer than current value
  let gcd = "";
  for (let i = 0; i < str2.length; i++) {
    const stringSlice2 = str2.substring(i, str2.length);
    console.log("stringSlice2", stringSlice2);
    const isString1Remainder0 = str1.split(stringSlice2).every((str) => !str);
    const isString2Remainder0 = str2.split(stringSlice2).every((str) => !str);
    console.log("isString1Remainder0", isString1Remainder0);
    console.log("isString2Remainder0", isString2Remainder0);
    if (isString1Remainder0 && isString2Remainder0) {
      gcd = gcd.length < stringSlice2.length ? stringSlice2 : gcd;
    }
  }
  return gcd;
};

// Test Cases:
console.log(gcdOfStrings("ABCABC", "ABC")); // "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // "AB"
console.log(gcdOfStrings("LEET", "CODE")); // ""
