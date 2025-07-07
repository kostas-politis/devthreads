import { z } from "zod/v4";

export const UserCreate = z.strictObject({
  email: z.email(),
  firstName: z.string(),
  lastName: z.string(),
  imageUrl: z.url(),
  portfolioUrl: z.url().optional(),
  address: z
    .object({
      street: z.string(),
      city: z.string(),
      state: z.string(),
      zip: z.string(),
    })
    .optional(),
});

export const UserUpdate = UserCreate.partial();

export const UserParams = z.strictObject({ id: z.string() });

export type UserCreate = z.infer<typeof UserCreate>;
export type UserUpdate = z.infer<typeof UserUpdate>;
export type UserParams = z.infer<typeof UserParams>;
