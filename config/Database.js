import {Sequelize} from "sequelize";

const db = new Sequelize('testcrud','admin','mysql12345',{
    host: 'hobin-new.cu7kqg4havxg.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
});

export default db;
