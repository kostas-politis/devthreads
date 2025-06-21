import { z } from "zod/v4";

export const UserCreate = z.object({
  id: z.string(),
  email: z.email(),
  firstName: z.string(),
  lastName: z.string(),
  imageUrl: z.string(),
  portfolioUrl: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
  }),
});

export const UserUpdate = UserCreate.partial();

export const UserParams = z.object({ id: z.string() });

export type UserCreate = z.infer<typeof UserCreate>;
export type UserUpdate = z.infer<typeof UserUpdate>;
export type UserParams = z.infer<typeof UserParams>;
