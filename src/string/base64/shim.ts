import base64 from ".";
import { addPrototype } from "../../utils";

declare global {
  interface String {
    base64(): string;
  }
}

/**
 * Encodes data with MIME base64
 * @memberof String.prototype
 * @function base64
 * @returns {String}
 * @example
 * 'prototyped.js'.base64(); // 'cHJvdG90eXBlZC5qcw=='
 */
addPrototype(String, "base64", base64);
