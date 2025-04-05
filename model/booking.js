const Sequelize=require('sequelize')

const sequelize=require('../utils/database')

const bookingTable=sequelize.define('booking',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    seatNumber:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
})

module.exports=bookingTable