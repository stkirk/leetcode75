// Given strings s & t return true if t is an anagram of s
// an anagram is valid if the letters of the two words are rearranged and each letter is used exactly once

const validateAnagram = (s: string, t: string): boolean => {
  // check if strings are same length
  if (s.length !== t.length) {
    return false;
  }
  // create map from s with letter key, occurence count value
  const letterMap: { [key: string]: number } = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // if char in map, incremement count
    if (letterMap[char]) {
      letterMap[char] += 1;
    } else {
      // else add it with count of 1
      letterMap[char] = 1;
    }
  }
  // check chars in t against the map and count of chars
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    // if its in there, decrement count
    if (letterMap[char] >= 1) {
      letterMap[char] -= 1;
    } else {
      // else it isn't in there or the count is 0 return false
      return false;
    }
  }
  return true;
};

// test cases
console.log(validateAnagram("anagram", "nagaram")); // true
console.log(validateAnagram("rat", "car")); // false
