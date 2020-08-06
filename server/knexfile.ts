import path from "path";

module.exports = {
  client: "postgres",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "proffy",
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
  useNullAsDefault: true,
};
