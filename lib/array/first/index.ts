import * as method from "./method";

declare global {
  interface Array<T> {
    first(): T;
  }
}

/**
 * Returns the first item of the array
 * @memberof Array
 * @returns {*}
 * @example
 * [1, 2, 3].first(); // 1
 */
Array.prototype.first = function() {
  return method(this);
};