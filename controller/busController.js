
const { Op } = require('sequelize')
const buses=require('../model/bus')
exports.addBuses=async(req,res)=>{
    try {
        console.log("adding the bus")
        const {busNumber,totalSeats,availableSeats}=req.body
        const bus=await buses.create({busNumber:busNumber,totalSeats:totalSeats,availableSeats:availableSeats})
        res.status(201).send(`Bus added succesfully with bus Number ${busNumber}`)
    } catch (error) {
        console.log(error)
        res.status(500).send("Adding bus is failed")
        
    }
    
}
exports.getBuses=async(req,res)=>{

    try {
        const busData= await buses.findAll({
            where:{
                availableSeats:{[Op.gt]:10}
            }
        })
        res.status(200).send(busData)
    } catch (error) {
        console.log(error)
        res.status(500).send("getting the bus data is failed")
    }

}
