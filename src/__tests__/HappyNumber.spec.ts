import { isHappy } from "../Easy/HashMap/HappyNumber";

describe("HappyNumber", () => {
  it("works for a happy number", () => {
    expect(isHappy(19)).toBe(true);
  });
  it("works for a non happy number", () => {
    expect(isHappy(2)).toBe(false);
  });
});
