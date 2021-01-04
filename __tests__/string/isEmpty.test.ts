import "../../src/string/isEmpty";

describe("String.prototype.isEmpty", () => {
  test('"123".isEmpty() returns false', () => {
    expect("123".isEmpty()).toBe(false);
  });

  test('"".isEmpty() returns true', () => {
    expect("".isEmpty()).toBe(true);
  });
});
