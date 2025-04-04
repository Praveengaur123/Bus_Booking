
const database=require('../utils/database')

const Student=require('../model/student')

exports.getEntries=async(req,res)=>{
    try {
        const entries=await Student.findAll()
        res.status(200).send("fetched succesfully",entries)
    } catch (error) {
        res.status(500).send(`unable to fetch entry`)
    }

}
exports.addEntries=async(req,res)=>{
    try {
        const {email,name}=req.body;
        const student=await Student.create({email:email,name:name})
        res.status(201).send(`user with name ${name} and ${email} is created`)
    } catch (error) {
        res.status(500).send(`unable to make entry`)  
    }
    
}
exports.updateEntries=async(req,res)=>{
    
    try {
        const {id}=req.params
        const {name}=req.body
        const student=await Student.findByPK(id)
        if(!student) res.status(404).send("student not found");
        res.status(200).send("student updated")
    } catch (error) {
        res.status(500).send(`unable to update entry`)  
    }
}
exports.deleteEntries=async(req,res)=>{
    const id=req.params
    try {
        const student =await Student.destroy({
            where:{id:id}
        })
        if(!student) res.status(404).send("User Not Found");
        res.status(200).send(`user with id ${id} id deleted`)
    } catch (error) {
        res.status(500).send(err.message)
    }
    
}
