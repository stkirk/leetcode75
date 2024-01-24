// Given a string, s:
// return true if it is a valid palindrom, else return false
// convert all uppercase letters to lowercase
// only consider alphanumeric characters

const validatePalindrome = (s: string): boolean => {
  // format string to weed out non alphanumeric and convert to lowercase
  const alphanumericLowercaseOnly = s
    .split("")
    .filter((char) => /[a-zA-Z0-9]/.test(char))
    .join("")
    .toLowerCase();

  // while loop from both sides, compare chars until meeting in middle
  let left = 0;
  let right = alphanumericLowercaseOnly.length - 1;
  while (left < right) {
    // compare, if not same return false
    if (alphanumericLowercaseOnly[left] !== alphanumericLowercaseOnly[right]) {
      return false;
    } else {
      // else pinch pointers inward
      left++;
      right--;
    }
  }
  return true;
};

// test cases
console.log(validatePalindrome("A man, a plan, a canal: Panama")); // true
console.log(validatePalindrome("race a car")); // false
console.log(validatePalindrome(" ")); // true
