var mysql=require('mysql2')

const Sequelize=require('sequelize');

const sequelize=new Sequelize('orm_practice','root','root',{
    host: 'localhost',
    dialect: 'mysql'
})


module.exports=sequelize;