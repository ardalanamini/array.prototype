import * as method from "./method";

declare global {
  interface Math {
    radsToDegrees(num: number): number;
  }
}

/**
 * Converts a radians to decimal degree
 * @memberof Math
 * @param {Number} num
 * @returns {Number}
 * @example
 * Math.radsToDegrees(Math.PI / 2); // 90
 */
Math.radsToDegrees = method;
