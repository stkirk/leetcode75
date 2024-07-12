import { isIsomorphic } from "../Easy/ArrayAndStrings/IsomorphicStrings";

describe("isIsomorphic", () => {
  it("will return true if strings are isomorphic", () => {
    expect(isIsomorphic("egg", "add")).toBe(true);
  });
  it("will return false if strings are not isomorphic", () => {
    expect(isIsomorphic("foo", "bar")).toBe(false);
  });
  it("will handle a letter used multiple times and seperated", () => {
    expect(isIsomorphic("paper", "title")).toBe(true);
  });
  it("will handle a letter used multiple times in t but not s", () => {
    expect(isIsomorphic("pazer", "title")).toBe(false);
  });
  it("will handle a letter used multiple times in s but not t", () => {
    expect(isIsomorphic("title", "pazer")).toBe(false);
  });
});
