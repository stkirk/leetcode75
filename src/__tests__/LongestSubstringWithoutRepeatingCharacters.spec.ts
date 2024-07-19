import { getLengthLongestSubstring } from "../Medium/ArrayAndStrings/LongestSubstringWithoutRepeatingCharacters";

describe("getLengthLongestSubstring", () => {
  it("returns the length of longest substring with no repeating characters", () => {
    expect(getLengthLongestSubstring("abcabcbb")).toBe(3);
  });
  it("returns the right length with only 1 repeated character", () => {
    expect(getLengthLongestSubstring("bbbbb")).toBe(1);
  });
  it("returns the right length with substring in middle sandwiched by repeating chars", () => {
    expect(getLengthLongestSubstring("pwwkew")).toBe(3);
  });
  it("returns the right length with substring in middle sandwiched by repeating chars", () => {
    expect(getLengthLongestSubstring("bbtablud")).toBe(6);
  });
});
