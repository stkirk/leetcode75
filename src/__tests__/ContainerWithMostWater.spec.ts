import { getMaxArea } from "../Medium/TwoPointers/ContainerWithMostWater";

describe("ContainerWithMostWater", () => {
  it("returns the max area of water", () => {
    expect(getMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });
  it("returns the max area of water with min number of lines", () => {
    expect(getMaxArea([1, 1])).toBe(1);
  });
});
