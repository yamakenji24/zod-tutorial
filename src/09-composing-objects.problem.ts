import { z } from "zod";
import { Equal, Expect } from "./helpers/type-utils";

/**
 * 🕵️‍♂️ Refactor this code below to reduce the duplication,
 * while also making sure the cases don't go red!
 */
const ID = z.string().uuid();

const User = z.object({
  id: ID,
  name: z.string(),
});

const Post = z.object({
  id: ID,
  title: z.string(),
  body: z.string(),
});

const Comment = z.object({
  id: ID,
  text: z.string(),
});

type cases = [
  Expect<Equal<z.infer<typeof Comment>, { id: string; text: string }>>,
  Expect<
    Equal<z.infer<typeof Post>, { id: string; title: string; body: string }>
  >,
  Expect<Equal<z.infer<typeof User>, { id: string; name: string }>>,
];
