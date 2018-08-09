require("../es6");
const path = require("path");
const fs = require("fs");
const methods = require("../es6/methods");

const generateKeywords = (obj = {}) => {
  const keywords = [];

  obj.$forEach((value, key) => {
    keywords.push(key);

    if (Object.isPlainObject(value)) keywords.push(...generateKeywords(value));
  });

  return keywords;
}

const PATH = path.join(__dirname, "..", "package.json")

const package = JSON.parse(fs.readFileSync(PATH, "utf8"));

package.keywords = [
  "server-side",
  "client-side",
  "common",
  "es5",
  "es6",
  "typescript",
  "prototype",
  ...generateKeywords(methods),
];

fs.writeFileSync(PATH, JSON.stringify(package, undefined, 2));