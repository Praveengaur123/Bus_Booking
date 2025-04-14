const Sequelize=require('sequelize')

const sequelize=require('../utils/database')

const busTable=sequelize.define('Buses',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    busNumber:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:true
    },
    totalSeats:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    availableSeats:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports=busTable