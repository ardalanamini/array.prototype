import "../../src/array/sample";

describe("Array.prototype.sample", () => {
  test('["a", "b", "c", "d"].sample() returns "a" or "b" or "c" or "d"', () => {
    expect(["a", "b", "c", "d"].sample()).toMatch(/[abcd]/);
  });
});
