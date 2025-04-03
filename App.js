
const express=require('express')

const database=require('./utils/database')

const studentRoute=require('./route/studentRoute')

const busRoute=require('./route/busRoute')

const app=express()

app.use(express.json())

app.get('',(req,res)=>{
    res.send('Hello World')
})

app.use('/student',studentRoute)

app.use('/bus',busRoute)

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});