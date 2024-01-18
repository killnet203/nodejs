//file to connect database
const {Sequelize} = require('sequelize');

//connect to database
const sequelize = new Sequelize('killerofweb', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

//check connection to database
let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully');
    } catch (error) {
        console.log('Unable to connect to the database: ', error);
    }
}


module.exports = connectDB;