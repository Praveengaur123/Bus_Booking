const express=require('express')

const studentController=require('../controller/studentController')

const router =express.Router()

router.get('/getUser',studentController.getEntries)

router.post('/add',studentController.addEntries)

router.put('/update/:id',studentController.updateEntries)

router.delete('/delete/:id',studentController.deleteEntries)

module.exports=router