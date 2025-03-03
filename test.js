const erukatypes = require("./types");

test("String validation should pass", () => {
  expect(erukatypes.String("test")).toBe("test");
});

test("String validation should fail", () => {
  expect(() => erukatypes.String(123)).toThrow(TypeError);
});

test("Number validation should pass", () => {
  expect(erukatypes.Number(42)).toBe(42);
});

test("Number validation should fail", () => {
  expect(() => erukatypes.Number("NaN")).toThrow(TypeError);
});

test("Boolean validation should pass", () => {
  expect(erukatypes.Boolean(true)).toBe(true);
});

test("Boolean validation should fail", () => {
  expect(() => erukatypes.Boolean(0)).toThrow(TypeError);
});
