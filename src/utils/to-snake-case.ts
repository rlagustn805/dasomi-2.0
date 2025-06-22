export function toSnakeCase(obj: Record<string, any>) {
  const newObj: Record<string, any> = {};
  Object.entries(obj).forEach(([key, value]) => {
    const snakeKey = key.replace(
      /[A-Z]/g,
      letter => `_${letter.toLowerCase()}`
    );
    newObj[snakeKey] = value;
  });
  return newObj;
}
