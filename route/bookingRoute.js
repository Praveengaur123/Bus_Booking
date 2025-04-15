const express=require('express')

const bookingController=require('../controller/bookingController')

const router=express.Router()

router.post('/addBooking',bookingController.addBooking)

router.get('/getBooking',bookingController.getBooking)

module.exports=router