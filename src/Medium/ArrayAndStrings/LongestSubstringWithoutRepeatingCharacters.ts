// Given a string, s
// return the length of the longest substring that can be sliced from s
// where no characters repeat

export function getLengthLongestSubstring(s: string): number {
  // initialize value for maxLength at 0
  let maxLength: number = 0;
  // pointer for left bound of substring at 0
  let l: number = 0;
  // pointer for right bound of substring at 0
  let r: number = 0;

  // while loop as long as r < s.length
  while (r < s.length) {
    // substring in window, non-inclusive of r
    let curSubString: string = s.slice(l, r);
    const charToAdd = s[r];
    const indexOfDuplicate = curSubString.indexOf(charToAdd);
    // if character at r is not in current substring
    if (indexOfDuplicate === -1) {
      // add the char to substring
      curSubString += charToAdd;
      // set maxLength to max of current value and curSubstring.length
      maxLength = Math.max(maxLength, curSubString.length);
      // increment r
      r++;
    } else {
      // increment l
      l++;
    }
  }
  return maxLength;
}
