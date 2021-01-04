import "../../src/array/sortBy";

describe("Array.prototype.sortBy", () => {
  test("['five', 'three', 'one'].sortBy('length') returns ['one', 'five', 'three']", () => {
    expect(["five", "three", "one"].sortBy("length")).toEqual([
      "one",
      "five",
      "three",
    ]);
  });

  // tslint:disable-next-line: max-line-length
  test("['five', 'three', 'one'].sortBy((value) => -value.length) returns ['three', 'five', 'one']", () => {
    expect(["five", "three", "one"].sortBy(value => -value.length)).toEqual([
      "three",
      "five",
      "one",
    ]);
  });
});
