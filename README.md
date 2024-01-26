# Mock Radar API

This project is a mock API for the [Search API](https://radar.com/documentation/api#search) of [Radar](https://radar.com/).
It uses [json-server](https://github.com/typicode/json-server) and [faker.js](https://fakerjs.dev/) to generate fake data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository: `git clone https://github.com/Christian-Garrison/mock-radar-api.git`
2. Navigate to the project directory: `cd project-directory`
3. Install the dependencies: `yarn install`
4. Add Radar API key to `.env` file (see [example](.env.example))

## Usage

1. Generate the fake data: `yarn generate`
2. Start the JSON server: `yarn start`
3. The server will be running on `http://localhost:3001`

## Contributing

Contributions are welcome! Please follow the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
