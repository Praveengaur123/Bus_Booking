const database=require('../model/student')

const buses=require('../model/bus')
exports.addBuses=async(req,res)=>{
    try {
        const {busNumber,totalSeats,availableSeats}=req.body
        await buses.create({busNumber:busNumber,totalSeats:totalSeats,availableSeats:availableSeats})
        res.status(201).send(`Bus added succesfully with bus Number ${busNumber}`)
    } catch (error) {
        console.log(error)
        res.status(500).send("Adding bus is failed")
        
    }
    
}
exports.getBuses=async(req,res)=>{

    try {
       const buseData= await buses.findAll()
        res.status(200).send(buseData)
    } catch (error) {
        console.log(error)
        res.status(500).send("getting the bus data is failed")
    }

}
