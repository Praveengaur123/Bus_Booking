const Sequelize=require('sequelize')

const sequelize=require('../utils/database')

const bookingTable=require('./booking')

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
        type:Sequelize.ENUM("Failed","Completed","Pending"),
        allowNull:true,
    },
    bookingID:{
        type:Sequelize.STRING,
        allowNull:false,
    }
},
{
    timestamps:false

})

bookingTable.hasMany(paymentTable)
paymentTable.belongsTo(bookingTable)

module.exports=paymentTable