import knex from "knex";

const db = knex({
  client: "postgres",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "proffy",
  },
  useNullAsDefault: true,
});

export default db;
