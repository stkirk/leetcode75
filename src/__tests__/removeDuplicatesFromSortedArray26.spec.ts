import { removeDuplicates } from "../Easy/ArrayAndStrings/RemoveDuplicatesFromSortedArray26";

describe("removeDuplicates", () => {
  it("should remove duplicates and return number of unique elements", () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
  });
  it("should remove multiple duplicates and return number of unique elements", () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
  });
  it("should work with duplicates at end", () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4])).toBe(5);
  });
  it("should work with only 1 element", () => {
    expect(removeDuplicates([0])).toBe(1);
  });
  it("should work with no duplicates", () => {
    expect(removeDuplicates([0, 1])).toBe(2);
  });
});
