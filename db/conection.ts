import {Sequelize} from 'sequelize';
const sequelize = new Sequelize('TEB_ESCOLA',
'postgres', '0901931412',{
    host: 'localhost',
    dialect: 'postgres'
});

export default sequelize;
