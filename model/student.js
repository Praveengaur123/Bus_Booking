const Sequelize=require('sequelize')

const sequelize=require('../utils/database')
console.log("Entered in database")

const User=sequelize.define('User',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=User

