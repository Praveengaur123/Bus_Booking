const Sequelize=require('sequelize')

const sequelize=require('../utils/database')

const paymentTable=sequelize.define('payment',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    amountPaid:{
        type:Sequelize.DECIMAL(10,2),
        allowNull:true
    },
    paymentStatus:{
        tyep:Sequelize.ENUM("Failed","Completed","Pending"),
        allowNull:true,
    },
    bookingID:{
        tyep:Sequelize.INTEGER,
        allowNull:true,
    }

})

module.exports=paymentTable