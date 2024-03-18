// Given two strings, randsomeNote and magazine
// return true if ransomNote can be constructed using only the letters from magazine
// otherwise return false

const canConstructRansomNote = (
  ransomNote: string,
  magazine: string
): boolean => {
  // loop over magazine and create a hashmap with characters and their count
  const letterCountMap: { [key: string]: number } = {};
  for (let i = 0; i < magazine.length; i++) {
    const char = magazine[i];
    if (char in letterCountMap) {
      letterCountMap[char] += 1;
    } else {
      letterCountMap[char] = 1;
    }
  }
  // loop over ransomNote
  for (let i = 0; i < ransomNote.length; i++) {
    // check if character exists in map and if its count is >= 1
    const char = ransomNote[i];
    if (char in letterCountMap && letterCountMap[char] >= 1) {
      // decrement the count
      letterCountMap[char] -= 1;
    } else {
      // char doesn't exist or count is 0
      // return false
      return false;
    }
  }
  // loop finishes with all characters in note available in magazine
  return true;
};

console.log(canConstructRansomNote("a", "b")); // false
console.log(canConstructRansomNote("aa", "ab")); // false
console.log(canConstructRansomNote("aa", "aab")); // true
