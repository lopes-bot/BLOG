module.exports = {
  dialect: "postgres",
  port: 5432,
  host: "localhost",
  schema: "public",
  database: "blog",
  username: "postgres",
  password: "andre123",
  define: {
    timestamps: true,
    underscored: true,
  },
};
