import { update } from "../Interview/minware";

describe("update function", () => {
  it("satisfies update requirements", () => {
    expect(update(2)).toBeGreaterThan(6);
    expect(update(2)).toBeLessThan(7);
  });
});
