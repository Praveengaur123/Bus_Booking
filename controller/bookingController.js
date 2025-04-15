const booking=require('../model/booking')

exports.addBooking=async(req,res)=>{
    try {
        const {seatNumber}=req.body
        const data=await booking.create({seatNumber:seatNumber})
        res.status(201).send(`seat is booked with ${seatNumber}`)
    } catch (error) {
        console.log(error)
        res.status(501).send('Unable to book')    
    } 
}

exports.getBooking=async (req,res) => {
    try {
        const data=booking.findAll()
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.status(501).send('Unable to fetch booking')
    }
}

