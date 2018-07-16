const method = (str: string): string => (
  str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g) || [""]
).map((x) => x.toLowerCase()).join(" ").replace(/^[a-z]/, (char) => char.toUpperCase());

export = method;