import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.POSTGRES_DATABASE || "",
    process.env.POSTGRES_USER || "", process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres'
});
console.log(process.env.POSTGRES_PASSWORD)
export default sequelize;
