const Sequelize = require('sequelize');

//string de conexão com bd
const sequelize = new Sequelize(process.env.DATABASE_MYSQL, process.env.USER_MYSQL,process.env.PASSWORD_MYSQL,{
  dialect: 'mysql',
  host: 'localhost',
  port:3307
});

const db = {};

db.Sequelize = Sequelize; 
db.sequelize = sequelize;

// colocar as informações do framework e a instância para ser usado no controller. 
db.deliveries = require("../models/delivery")(sequelize,Sequelize);

module.exports = db;


