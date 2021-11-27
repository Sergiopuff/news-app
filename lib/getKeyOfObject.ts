const getKey =
  <T extends object, U extends keyof T>(key: string) =>
  (obj: T) =>
    key;

const getKeyValue =
  <T extends object, U extends keyof T>(key: U) =>
  (obj: T) =>
    obj[key];

export { getKey, getKeyValue };
