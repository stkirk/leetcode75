// Prompt:
// Given an array of characters chars, compress it using the following algorithm:
// Begin with an empty string s. For each group of consecutive repeating characters in chars:
// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars.
// Note that group lengths that are 10 or longer will be split into multiple characters in chars.
// After you are done modifying the input array, return the new length of the array.
// You must write an algorithm that uses only constant extra space.

const compress = (chars: string[]): number => {
  // loop through chars
  let left = 0; // start index for splice
  let right = 0;
  let curString = "";
  while (chars[right]) {
    // keep track of index window for consecutive characters
    const curChar = chars[right];
    if (!curString || curChar === curString[0]) {
      // append the char
      curString += curChar;
      // shift window to right
      right += 1;
    }
    if (curChar !== curString[0] || right === chars.length) {
      console.log("curString b4 splice:", curString, "right:", right);
      // found a different character or last char
      const char = curString[0];
      let count = curString.length.toString().split(""); // 12 -> ['1', '2']
      if (count.length === 1 && count[0] === "1") {
        count = [];
      }
      chars.splice(left, curString.length, char, ...count);
      // reset the window
      right = left + count.length + 1;
      left = right;
      curString = "";
    }
  }
  return chars.length;
};

// test cases
console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); //-> 6: ["a","2","b","2","c","3"]
console.log(compress(["a"])); //-> 1: ["a"]
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
); //-> 4: ["a","b","1","2"]
