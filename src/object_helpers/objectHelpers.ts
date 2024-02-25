import { toCamelCase, toSnakeCase } from "../text_helpers/TextHelpers";

export const transform = <T = unknown>(
  object: any,
  transform_to: "snake_case" | "camelCase"
): T => {
  return transformChunk(object, transform_to);
};

const transformChunk = (
  object: any,
  transform_to: "snake_case" | "camelCase"
): any => {
  const transformer = getTransformer(transform_to);
  if (object == null) return object;
  if (Array.isArray(object))
    return object.map((object) => transformChunk(object, transform_to));
  if (typeof object === "object")
    return Object.keys(object).reduce(
      (acc, cur) => ({
        ...acc,
        [transformer(cur)]: transformChunk(object[cur], transform_to),
      }),
      {}
    );
  return object;
};

const getTransformer = (transform_to: "snake_case" | "camelCase") => {
  switch (transform_to) {
    case "snake_case":
      return toSnakeCase;
    case "camelCase":
      return toCamelCase;
    default:
      throw new Error("Invalid transform_to");
  }
};
