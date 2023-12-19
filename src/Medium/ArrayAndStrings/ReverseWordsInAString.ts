// Prompt:
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters.
// The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// s may contain leading or trailing spaces and/or extra spaces between words

const reverseWords = (s: string): string => {
  // split s on space and filter empty strings
  const strArr = s.split(" ").filter((str) => str);
  // left and right pointers
  let left = 0;
  let right = strArr.length - 1;
  // while loop until left catches right
  while (left < right) {
    // swap right and left items
    const curLeft = strArr[left];
    const curRight = strArr[right];
    strArr[left] = curRight;
    strArr[right] = curLeft;
    left++;
    right--;
  }
  return strArr.join(" ");
};

// test cases:
console.log(reverseWords("the sky is blue")); //-> "blue is sky the"
console.log(reverseWords("  hello world  ")); //-> "world hello"
console.log(reverseWords("a good   example")); //-> "example good a"
