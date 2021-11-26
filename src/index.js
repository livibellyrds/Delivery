require('dotenv').config();
const path =require('path');
const  express = require('express');
const router = require("./router");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'web')))

app.get('/', function (_, res) {
  res.render('index')
})
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