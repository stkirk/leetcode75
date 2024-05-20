import { findMajorityElement } from "../Easy/ArrayAndStrings/MajorityElement";

describe("findMajorityElement", () => {
  it("will find the majority element in an array on ints", () => {
    expect(findMajorityElement([3, 2, 3])).toBe(3);
  });
});
