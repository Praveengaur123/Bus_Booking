
const express=require('express')

const sequelize=require('./utils/database')

const studentRoute=require('./route/studentRoute')

const busRoute=require('./route/busRoute')

const paymentRoute=require('./route/paymentRoute')

const bookingRoute=require('./route/bookingRoute')

const app=express()

app.use(express.json())

app.get('',(req,res)=>{
    res.send('Hello World')
})

app.use('/student',studentRoute)

app.use('/bus',busRoute)

app.use('/payment',paymentRoute)

app.use('/booking',bookingRoute)

sequelize.sync()
.then(result=>{
    app.listen(3000)
    console.log(`Server running on http://localhost:3000`);
})
.catch(err=>{
    console.log(err)
})
