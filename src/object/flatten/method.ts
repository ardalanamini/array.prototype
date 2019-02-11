import * as isPlainObject from "../isPlainObject/method";
import * as forEach from "../forEach/method";

const method = (obj: { [key: string]: any }): { [key: string]: any } => {
  const result: { [key: string]: any } = {};

  forEach(obj, (value, key) => {
    if (Array.isArray(value)) {
      const temp: { [key: string]: any } = {};

      value.forEach((subValue, index) => {
        temp[`[${index}]`] = subValue;
      });

      value = temp;
    }

    if (isPlainObject(value)) {
      const flat = method(value);

      forEach(flat, (subValue, subKey) => {
        const separator = /^\[/.test(subKey) ? "" : ".";

        result[`${key}${separator}${subKey}`] = subValue;
      });

      return;
    }

    result[key] = value;
  });

  return result;
};

export = method;