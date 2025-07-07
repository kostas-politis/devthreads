import { faker } from "@faker-js/faker";
import { prisma } from "../src/connector/prisma.ts";
import { Prisma } from "../src/generated/prisma/client.ts";

function createUser(): Prisma.UserCreateInput {
  return {
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    imageUrl: faker.internet.url(),
    portfolioUrl: faker.internet.url(),
    address: {
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
    },
  };
}

try {
  await prisma.user.create({
    data: createUser(),
  });
} catch (error) {
  console.log(error);
} finally {
  await prisma.$disconnect();
}
