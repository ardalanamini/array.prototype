import * as method from "./method";

declare global {
  interface Array<T> {
    implode(path: string, separator?: string): string;
  }
}

/**
 * It's like join but u get to git it which keys to join
 * @memberof Array
 * @param {String} path
 * @param {String} [separator=", "]
 * @returns {String}
 * @example
 * [{a: {b: 'first'}}, {a: {b: 'second'}}, {a: {b: 'third'}}].implode('a.b', ', '); // 'first, second, third'
 */
Array.prototype.implode = function(path, separator) {
  return method(this, path, separator);
};