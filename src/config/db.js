import {Sequelize, DataTypes} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
);
 const connectDB = async() => {
    try {
        await sequelize.sync({force: true});
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export {connectDB, sequelize, DataTypes}
