import "../../src/math/radsToDegrees";

describe("Math.radsToDegrees", () => {
  test("Math.radsToDegrees(Math.PI / 2) returns 90", () => {
    expect(Math.radsToDegrees(Math.PI / 2)).toBe(90);
  });
});
