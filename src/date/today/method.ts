import * as pad from "../../string/pad/method";

const method = (): string => {
  const now = new Date();

  return `${now.getFullYear()}-${pad(`${now.getMonth() + 1}`, -2, "0")}-${pad(`${now.getDate()}`, -2, "0")}`;
};

export = method;