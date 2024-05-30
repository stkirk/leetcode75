import { removeElement } from "../Easy/ArrayAndStrings/RemoveElement27";

describe("removeElement", () => {
  it("removes values from first and last index correctly", () => {
    const k = removeElement([3, 2, 2, 3], 3);
    expect(k).toBe(2);
  });
  it("removes values from first and last index correctly", () => {
    const k = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
    expect(k).toBe(5);
  });
  it("removes values when middle index on is target", () => {
    const k = removeElement([1, 2, 2], 2);
    expect(k).toBe(1);
  });
});
