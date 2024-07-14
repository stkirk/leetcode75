import { validateWordPattern } from "../Easy/ArrayAndStrings/WordPattern290";

describe("WordPattern", () => {
  it("can match a valid pattern", () => {
    expect(validateWordPattern("abba", "dog cat cat dog")).toBe(true);
  });
  it("works for invalid string", () => {
    expect(validateWordPattern("abba", "dog cat cat fish")).toBe(false);
  });
  it("works for invalid pattern", () => {
    expect(validateWordPattern("aaaa", "dog cat cat dog")).toBe(false);
  });
});
