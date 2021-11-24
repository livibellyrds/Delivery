require('dotenv').config();
const  express = require('express');
const router = require("./router");

const app = express();

app.use(express.json());
const db = require("./config/db");
//exclui a tabela resincroniza a base de dados
db.sequelize.sync({ force: true }).then(() => { 
  console.log("Drop and re-sync db.");
});

app.use("/",router);

const port = 8080;

  
app.listen(port, ()=> {
  console.log("backend started!");
});