const Sequelize=require('sequelize')

const sequelize=require('../utils/database')
console.log("Entered in database")

const UserTable=sequelize.define('User',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
},
{
    timestamps:false

})

module.exports=UserTable

