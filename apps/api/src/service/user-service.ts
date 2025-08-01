import { AlreadyExistsError, NotFoundError } from "@repo/error/errors";
import { prisma } from "../connector/prisma.ts";
import type { User } from "../generated/prisma/client.ts";
import type { UserCreate, UserUpdate } from "../schema/user-schema.ts";

export async function createUser(data: UserCreate): Promise<User> {
  const userExists = !!(await getUserByEmail(data.email));
  if (userExists) {
    throw new AlreadyExistsError();
  }
  return await prisma.user.create({ data });
}

export async function updateUser(id: string, data: UserUpdate): Promise<User> {
  const userExists = !!(await getUserById(id));
  if (!userExists) {
    throw new NotFoundError();
  }
  return await prisma.user.update({ where: { id }, data });
}

export async function deleteUser(id: string): Promise<User> {
  return await prisma.user.delete({ where: { id } });
}

export async function getUserById(id: string): Promise<User | null> {
  return await prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: string): Promise<User | null> {
  return await prisma.user.findUnique({ where: { email } });
}
