const database=require('../model/student')

const addBuses=(req,res)=>{
    const {busNumber,totalSeats,availableSeats}=req.body

    const insertQuery=`INSERT INTO Buses (busNumber,totalSeats,availableSeats) VALUES (?,?,?)`

    database.execute(insertQuery,[busNumber,totalSeats,availableSeats],(err)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message)
            database.end()
            return
        }
        console.log("values has been insterd")
        res.status(200).send(`bus Added succesfully`)
    })
}
const getBuses=(req,res)=>{
    const {busNumber,totalSeats,availableSeats}=req.body||{}

    const getQuery=`SELECT * FROM Buses WHERE availableSeats=10`

    let params=[]
    if(busNumber&&totalSeats&&availableSeats){
        getQuery+=`WHERE busNumber=? AND totalSeats=? AND availableSeats=?`
        params=[busNumber,totalSeats,availableSeats]
    }

    database.execute(getQuery,params,(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message)
            return
        }
        if(result.affectedRows==0){
            console.log("No buses found")
            res.status(404).send("No buses found")
            return
        }
        res.status(200).send(result)
    })

}
module.exports={
    addBuses,
    getBuses
}