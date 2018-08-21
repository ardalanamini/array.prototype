import * as isString from "../../string/isString/method";
import { pathToKeys } from "../../utils";

const method = <T = any>(arr: T[], fn: string | ((value: T) => number)) => {
  let reducer = fn as ((value: T) => number);

  if (isString(fn)) {
    const keys = pathToKeys(fn);

    reducer = (value) => keys.reduce((prev, cur) => (prev as any)[cur], value);
  }

  return arr.sort((a, b) => reducer(a) - reducer(b));
};

export = method;
