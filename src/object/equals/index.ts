import { addPrototype } from "../../utils";
import * as method from "./method";

declare global {
  interface Object {
    $equals(obj: any): boolean;
  }
}

/**
 * Performs a deep comparison between two values to determine if they are equivalent
 * @memberof Object.prototype
 * @function $equals
 * @param {*} obj
 * @returns {Boolean}
 * @example
 * ({ a: [2, { e: 3 }], b: [4], c: 'foo' }).$equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
 */
addPrototype(Object, "$equals", function(this: object, obj: any) {
  return method(this, obj);
});
