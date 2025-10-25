import { faker } from '@faker-js/faker';

export const testData = {
  randomUser: () => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10 })
  })
};