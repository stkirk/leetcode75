// Given a string, s consisting of uppercase and lowercase letters
// return the length of the longest palindrome that can be built with those letters

function longestPalindrome(s: string): number {
  const chars = s.split("");
  // create hashmap of char counts
  const charCounts: { [key: string]: number } = {};
  chars.forEach((char) => {
    if (char in charCounts) {
      charCounts[char] += 1;
    } else {
      charCounts[char] = 1;
    }
  });
  let count = 0;
  let odds = 0;
  // loop through chars
  chars.forEach((char) => {
    const charCount = charCounts[char];
    // if char count is > 1
    if (charCount > 1) {
      // add 2 to count
      count += 2;
      // decrement from hashmap
      charCounts[char] -= 2;
    } else if (charCount === 1) {
      odds += 1;
    }
  });
  if (odds > 0) {
    count += 1;
  }
  return count;
}

console.log(longestPalindrome("abccccdd")); // 7 -> "dccaccd"
console.log(longestPalindrome("a")); // 1 -> "a"
console.log(longestPalindrome("ccc")); // 3 -> "ccc"
console.log(longestPalindrome("bb")); // 2 -> "bb"
