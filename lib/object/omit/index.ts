import * as method from "./method";
import { addPrototype } from "../utils";

declare global {
  interface Object {
    $omit(arr: string[] | ((value: any, key: string) => any)): object;
  }
}

/**
 * Omits the key-value pairs corresponding to the given keys from an object; or
 * Creates an object composed of the properties the given function returns falsey for.
 * The function is invoked with two arguments: (value, key)
 * @memberof Object.prototype
 * @param {(string[]|function)} arr
 * @returns {Object}
 * @example
 * { a: 1, b: '2', c: 3 }.$omit(['b']); // { a: 1, c: 3 }
 * { a: 1, b: '2', c: 3 }.$omit((x) => typeof x === 'number'); // { b: '2' }
 */
function $omit(this: object, arr: string[] | ((value: any, key: string) => any)): object {
  return method(this, arr);
}

addPrototype("$omit", $omit);