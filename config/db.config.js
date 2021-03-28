module.exports = {
  HOST: "localhost",
  USER: "anchoreppl",
  PASSWORD: "H3ll0d4rkne355my0ldfr13nd",
  DB: "anchore",
  dialect: "sqlite::memory:",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};