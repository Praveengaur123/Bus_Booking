const express=require('express')

const paymentController=require('../controller/paymentController')

const router=express.Router()

router.post('/makePayment',paymentController.addPayment)

router.get('/getPayment',paymentController.getPayment)



module.exports=router