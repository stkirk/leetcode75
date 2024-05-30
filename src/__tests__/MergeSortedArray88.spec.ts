import { mergeSortedArray } from "../Easy/ArrayAndStrings/MergeSortedArray88";

describe("mergeSortedArray", () => {
  it("merges arrays with equal valid numbers", () => {
    expect(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([
      1, 2, 2, 3, 5, 6,
    ]);
  });
  it("merges arrays wheres nums1 has only valid number", () => {
    expect(mergeSortedArray([1], 1, [], 0)).toEqual([1]);
  });
  it("merges arrays wwhere nums2 has only valid number", () => {
    expect(mergeSortedArray([0], 0, [1], 1)).toEqual([1]);
  });
});
