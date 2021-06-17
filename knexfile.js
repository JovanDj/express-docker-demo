require("dotenv").config();

// Update with your config settings.
const { POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_USER } = process.env;
const { knexSnakeCaseMappers } = require("objection");

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: POSTGRES_DB,
      password: POSTGRES_PASSWORD,
      user: POSTGRES_USER,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },

    ...knexSnakeCaseMappers(),
  },
};
