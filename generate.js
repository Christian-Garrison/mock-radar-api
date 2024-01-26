import { faker } from '@faker-js/faker';
import emojiFlags from 'emoji-flags';
import { writeFileSync } from 'node:fs';

const createRandomAddress = () => {
  const latitude = faker.location.latitude();
  const longitude = faker.location.longitude();
  const geometry = {
    type: 'Point',
    coordinates: [longitude, latitude],
  };

  const country = {
    name: faker.location.country(),
    code: faker.location.countryCode(),
  };

  const countryFlag = () => {
    const data = emojiFlags.countryCode(country.code);
    return data.emoji;
  };

  const address = {
    city: faker.location.city(),
    postalCode: faker.location.zipCode(),
    stateCode: faker.location.state({ abbreviated: true }),
    state: faker.location.state(),
    street: faker.location.streetAddress({ useFullAddress: true }),
  };

  const obj = {
    latitude,
    longitude,
    geometry,
    country: country.name,
    countryCode: country.code,
    countryFlag: countryFlag(),
    county: faker.location.county(),
    distance: faker.number.float({ min: 0, max: 1000, multipleOf: 0.01 }),
    // borough: '',
    city: address.city,
    number: faker.location.buildingNumber(),
    // neighborhood: '',
    postalCode: address.postalCode,
    stateCode: address.stateCode,
    state: address.state,
    street: address.street,
    layer: 'place',
    formattedAddress: `${address.street}, ${address.city}, ${address.state}, ${address.stateCode} ${address.postalCode} ${country.name}`,
    addressLabel: address.street,
  };

  return obj;
};

const addresses = faker.helpers.multiple(createRandomAddress, {
  count: 100,
});

const response = {
  autocomplete: addresses,
};

writeFileSync('db.json', JSON.stringify(response));
