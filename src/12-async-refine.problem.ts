// CODE

import { expect, it } from "vitest";
import { z } from "zod";

// HINT - use me!
const doesStarWarsPersonExist = async (id: string) => {
  const data = await fetch("https://swapi.dev/api/people/" + id).then((res) =>
    res.json(),
  );

  return Boolean(data?.name);
};

const Form = z.object({
  id: z.string().refine(doesStarWarsPersonExist, 'Not found'),
  //           ^ 🕵️‍♂️
});

export const validateFormInput = async (values: unknown) => {
  const parsedData = await Form.parseAsync(values);

  return parsedData;
};

// TESTS

it("Should fail if the star wars person does not exist", async () => {
  await expect(
    validateFormInput({
      id: "123123123123123123",
    }),
  ).rejects.toThrow("Not found");
});

it("Should succeed if the star wars person does exist", async () => {
  expect(
    await validateFormInput({
      id: "1",
    }),
  ).toEqual({ id: "1" });
});
