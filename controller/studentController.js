const path=require('path')

const Student=require('../model/student')

exports.getEntries=async(req,res)=>{
    try {
        const entries=await Student.findAll()
        res.status(200).send(entries)
    } catch (error) {
        console.log(error)
        res.status(500).send(`unable to fetch entry`)
    }

}
exports.addEntries=async(req,res)=>{
    console.log("Adding the data")
    try {
        console.log("Adding the data")
        const {email,name}=req.body;
        const student=await Student.create({email:email,name:name})
        res.status(201).send(`user with name ${name} and ${email} is created`)
    } catch (error) {
        console.log(error)
        res.status(500).send(`unable to make entry`)  
    }
    
}
exports.updateEntries=async(req,res)=>{
    try {
        const {id}=req.params
        const {name}=req.body
        const student=await Student.findByPk(id)
        if(!student) res.status(404).send("student not found");
        student.name=name
        await student.save()
        res.status(200).send("student updated")
    } catch (error) {
        console.log(error)
        res.status(500).send(`unable to update entry`)  
    }
}
exports.deleteEntries=async(req,res)=>{
    const {id}=req.params
    try {
        const student =await Student.destroy({where:{id:id}})
        if(!student) {
            return res.status(404).send("User Not Found");
        }
        res.status(200).send(`user with id ${id} id deleted`)
    } catch (error) {
        res.status(500).send(error)
    }
}
