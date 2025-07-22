export const myConsole = (key: string, value: unknown): void => {
  const type = typeof value;
  if (type === "string") {
    console.log(key, value);
  } else {
    console.log(key, JSON.stringify(value, null, 2));
  }
};
