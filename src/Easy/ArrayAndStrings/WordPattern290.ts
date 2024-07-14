// Given two string, pattern and s, return true if s follows the pattern
// otherwise return false
// follow is defined as a full match such that there is a 1:1 correnspondance (bijection)
// between a letter in pattern and a non-empty word in s

export function validateWordPattern(pattern: string, s: string): boolean {
  // split s into array of words
  const words = s.split(" ").filter((word) => word);
  // return false if pattern.length !== words.length
  if (words.length !== pattern.length) {
    return false;
  }
  // create two maps to hold key:value pairs
  // 1: pattern[i]:words[i]
  const patternMap: { [key: string]: string } = {};
  // 2 words[i]: pattern[i]
  const wordMap: { [key: string]: string } = {};
  words.forEach((word, i) => {
    wordMap[word] = pattern[i];
    patternMap[pattern[i]] = word;
  });
  console.log(patternMap, wordMap);
  // loop over pattern
  for (let i = 0; i < pattern.length; i++) {
    // look up pattern[i] in map, make sure it matches s[i]
    // look up s[i] in map2, make sure it matches pattern[i]
    if (
      patternMap[pattern[i]] !== words[i] ||
      wordMap[words[i]] !== pattern[i]
    ) {
      // if either don't match, pattern is invalid
      return false;
    }
  }
  return true;
}
