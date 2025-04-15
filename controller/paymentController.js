const payment=require('../model/payment')

exports.addPayment=async(req,res)=>{
    try {
        const {amountPaid,paymentStatus,bookingID}=req.body
        const data=await payment.create({amountPaid:amountPaid,paymentStatus:paymentStatus,bookingID:bookingID})
        res.status(201).send(`Payment is created with ${bookingID}`)
        
    } catch (error) {
        console.log(error)
        res.status(500).send("Payment Failed")
    }
}
exports.getPayment=async(req,res)=>{
    try {
        const data=payment.findAll()
        res.status(200).send(data)
        
    } catch (error) {
        console.log(error)
        res.status(501).send("Unable to fetch payment")
        
    }
}