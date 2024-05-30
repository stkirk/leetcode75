import { getStarWarsCharacter } from "../Utils/getStarWarsCharacter";
import mockAxios from "axios";
// can mock both packages like 'axios' and files with filepath
// jest.mock("axios");
mockAxios.get = jest.fn().mockResolvedValue({ data: { name: "Mock Jedi" } });

describe("getStarWarsCharacter", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should return data", async () => {
    const res = await getStarWarsCharacter("1");

    expect(res).toBeTruthy();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
  it("should return a name", async () => {
    const res = await getStarWarsCharacter("1");

    expect(res).toBe("Mock Jedi");
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
