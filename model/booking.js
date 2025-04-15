const Sequelize=require('sequelize')

const sequelize=require('../utils/database')

const userTable=require('./student')

const busTable=require('./bus')

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
},
{
    timestamps:false
})

// Association

userTable.hasMany(bookingTable)
bookingTable.belongsTo(userTable)

busTable.hasMany(bookingTable)
bookingTable.belongsTo(busTable)

module.exports=bookingTable