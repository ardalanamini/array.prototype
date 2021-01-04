import "../../src/date/equals";

describe("Date.prototype.equals", () => {
  test("date1.equals(new Date(date1)) returns true", () => {
    const date1 = new Date();
    const date2 = new Date(date1);
    expect(date1.equals(date2)).toBe(true);
  });

  test("(new Date()).equals(new Date()) returns false", () => {
    const date1 = new Date();
    while (new Date().getTime() === date1.getTime()) {}
    const date2 = new Date();
    expect(date1.equals(date2)).toBe(false);
  });
});
