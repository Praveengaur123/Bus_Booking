
const database=require('../utils/database')

const getEntries=(req,res)=>{
    const {email,name}=req.body||{}

    const getQuery=`SELECT * FROM Users`

    let params=[]

    if(email&&name){
        getQuery+=`WHERE email=?AND name=?`
        params=[email,name]
    }

    database.execute(getQuery,params,(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message)
            return
        }
        if(result.affectedRows===0){
            res.status(404).send("data was not found")
            return
        }
        res.status(200).send(result)
    })

}

const addEntries=(req,res)=>{
    const {email,name}=req.body

    const insertQuery=`INSERT INTO Users (email,name) VALUES(?,?)`

    database.execute(insertQuery,[email,name],(err)=>{
        if(err) {
            console.log(err.message)
            res.status(500).send(err.message)
            database.end()
            return;
        }
        console.log("Values has been Inserted")
        res.status(200).send(`student with name ${name} and Email ${email} succesfully addded`)
    })
}
const updateEntries=(req,res)=>{
    const {id}=req.params
    const {name}=req.body
    const updateQuery=`UPDATE Users set name= ? WHERE id=?`

    database.execute(updateQuery,[name,id],(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message)
            database.end()
            return
        }
        if(result.affectedRows===0){
            
            res.status(404).send("Student Not Found")
            return
        }
        res.status(200).send("Student has been updated")
    })

}
const deleteEntries=(req,res)=>{
    const {id}=req.params
    const deleteQuery=`DELETE from Users WHERE id=?`;

    database.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message)
            database.end()
            return
        }
        if(result.affectedRows==0){
            res.status(404).send("User Not Found")
            return
        }
        res.status(200).send(`user with id ${id} id deleted`)
    })
}

module.exports={
    addEntries,
    updateEntries,
    deleteEntries,
    getEntries
}