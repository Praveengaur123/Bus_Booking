const express=require('express')

const busController=require('../controller/busController')

const router=express.Router()

router.post('/add',busController.addBuses)

router.get('/get',busController.getBuses)

module.exports=router