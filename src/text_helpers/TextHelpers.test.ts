import { snakeCaseToText, toCamelCase, toSnakeCase } from "./TextHelpers";

describe("TextService", () => {
  it("should test toSnakeCase", () => {
    expect(toSnakeCase("aBC")).toBe("a_b_c");
  });
  it("should test toCamelCase", () => {
    expect(toCamelCase("a_b_c")).toBe("aBC");
  });
  it("should test snakeCaseToText", () => {
    expect(snakeCaseToText("net_as_new_30")).toBe("Net as new 30");
    expect(snakeCaseToText("a_b_c")).toBe("A b c");
  });
});
