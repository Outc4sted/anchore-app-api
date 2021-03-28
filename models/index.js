const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './anchore-db.sqlite'
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = db;