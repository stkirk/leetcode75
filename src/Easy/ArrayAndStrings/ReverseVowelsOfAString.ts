// Prompt:
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u'
// they can appear in both lower and upper cases, more than once.

const reverseVowels = (s: string): string => {
  const vowels = ["a", "e", "i", "o", "u"];
  const sArr = s.split("");
  let left = 0;
  let right = s.length - 1;
  // while loop as long as left < right
  while (left < right) {
    // check if sArr[left] and sArr[right] are vowels, if they are swap them
    const curL = sArr[left];
    const curR = sArr[right];
    const isLVowel = vowels.includes(curL.toLowerCase());
    const isRVowel = vowels.includes(curR.toLowerCase());
    // if only one is, move the other pointer until you reach a vowel
    if (isLVowel && isRVowel) {
      sArr[left] = curR;
      sArr[right] = curL;
      left += 1;
      right -= 1;
    } else if (isLVowel) {
      // left is vowel, move right pointer
      right -= 1;
    } else if (isRVowel) {
      // right is on a vowel, move left pointer
      left += 1;
    } else {
      // neither is a vowel, move both pointers
      left += 1;
      right -= 1;
    }
  }
  return sArr.join("");
};

// test cases:
console.log(reverseVowels("hellO")); //-> "hOlle"
console.log(reverseVowels("leetcode")); //->"leotcede"
