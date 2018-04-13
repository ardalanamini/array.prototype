// tslint:disable-next-line:ban-types
const method = (func: Function): any => {
  const cache = new Map();

  const cached = (...args: any[]) => {
    const key = JSON.stringify(args);

    return cache.has(key) ? cache.get(key) : cache.set(key, func.call(func, ...args)) && cache.get(key);
  };

  cached.cached = cache;

  return cached;
};

export = method;