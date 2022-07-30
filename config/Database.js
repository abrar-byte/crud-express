import {Sequelize} from "sequelize";

// const db = new Sequelize('testcrud','admin','mysql12345',{
//     host: 'hobin-new.cu7kqg4havxg.us-east-1.rds.amazonaws.com',
//     dialect: 'mysql'
// });

// const db = new Sequelize('hobindatabase','admin','mysql123456',{
//     host: 'database-hobin.cu7kqg4havxg.us-east-1.rds.amazonaws.com',
//     dialect: 'mysql'
// });

// const db = new Sequelize('crud','abrar','Abcd#1234',{
//     host: 'localhost',
//     dialect: 'mysql'
// });


const db = new Sequelize('hobintest','admin','admin123',{
    host: 'databasehobin.cu7kqg4havxg.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
});
export default db;
