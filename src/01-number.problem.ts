// CODE

import { expect, it } from "vitest";
import { z } from "zod";
//       ^ 🕵️‍♂️

export const toString = (num: unknown) => {
  const isNumber = z.number({
    required_error: 'Expected number, received string',
    invalid_type_error: 'Expected number, received string'
  })

  isNumber.parse(num)
  return String(num);
};

// TESTS

it("Should throw a runtime error when called with not a number", () => {
  expect(() => toString("123")).toThrowError(
    "Expected number, received string",
  );
});

it("Should return a string when called with a number", () => {
  expect(toString(1)).toBeTypeOf("string");
});
