"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_ts_1 = require("@/client/prisma.ts");
var faker_1 = require("@faker-js/faker");
function createUser() {
    return {
        email: faker_1.faker.internet.email(),
        firstName: faker_1.faker.person.firstName(),
        lastName: faker_1.faker.person.lastName(),
        imageUrl: faker_1.faker.internet.url(),
        portfolioUrl: faker_1.faker.internet.url(),
        address: {
            street: faker_1.faker.location.street(),
            city: faker_1.faker.location.city(),
            state: faker_1.faker.location.state(),
            zip: faker_1.faker.location.zipCode(),
        },
    };
}
try {
    await prisma_ts_1.default.user.create({
        data: createUser(),
    });
}
catch (error) {
    console.log(error);
}
finally {
    await prisma_ts_1.default.$disconnect();
}
