export const toSnakeCase = (text: string): string => {
  return text
    .replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`)
    .replace(/^_/, "");
};
export const toCamelCase = (text: string): string => {
  return text
    .replace(/_([a-z])/g, (match) => match[1].toUpperCase())
    .replace(/^_/, "");
};
export const snakeCaseToText = (text: string): string => {
  return text
    .replace(/_/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .replace(/^./, (match) => match.toUpperCase());
};

export const capitalize = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const capitalizeEachWord = (sentence: string): string => {
  return sentence.split(" ").map(capitalize).join(" ");
};
