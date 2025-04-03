
const express=require('express')

const database=require('./utils/database')

const studentRoute=require('./route/studentRoute')

const app=express()

app.use(express.json())

app.get('',(req,res)=>{
    res.send('Hello World')
})

app.use('/student',studentRoute)


app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});