import { add } from "./index";

describe("index", () => {
  test("index", () => {
    expect(add(1, 1)).toEqual(2);
  });
});
