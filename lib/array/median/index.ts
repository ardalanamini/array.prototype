import * as method from "./method";

declare global {
  interface Array<T> {
    median(path?: string): number;
  }
}

/**
 * Returns the median value of a given path
 * @memberof Array
 * @param {string} [path]
 * @returns {number}
 * @example
 * [1, 1, 2, 4].median(); // 1.5
 * [{foo: 10}, {foo: 10}, {foo: 20}, {foo: 40}].median('foo'); // 15
 */
Array.prototype.median = function(path) {
  return method(this, path);
};
