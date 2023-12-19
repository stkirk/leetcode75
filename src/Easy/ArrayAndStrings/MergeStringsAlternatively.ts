// Prompt:
// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating order, starting with word1.
//If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

const mergeStringsAlternatively = (
  string1: string,
  string2: string
): string => {
  // initialize both strings into queues
  const q1 = string1.split("");
  const q2 = string2.split("");
  let result = "";

  // while loop as long as q1 or q1 have items
  while (q1.length || q2.length) {
    if (q1.length) {
      result += q1.shift();
    }
    if (q2.length) {
      result += q2.shift();
    }
  }
  return result;
};

const mergeStringsAlternatively2 = (
  string1: string,
  string2: string
): string => {
  // get larger string length to iterate over
  const loopIterations =
    string1.length > string2.length ? string1.length : string2.length;
  let result = "";

  for (let i = 0; i < loopIterations; i++) {
    const char1 = string1[i] ? string1[i] : "";
    const char2 = string2[i] ? string2[i] : "";
    result += char1 + char2;
  }
  return result;
};

// console.log(mergeStringsAlternatively("ab", "pqrs")); // "a p b q r s"
// console.log(mergeStringsAlternatively("abcd", "pq")); // "a p b q c d"
console.log(mergeStringsAlternatively2("ab", "pqrs")); // "a p b q r s"
console.log(mergeStringsAlternatively2("abcd", "pq")); // "a p b q c d"
