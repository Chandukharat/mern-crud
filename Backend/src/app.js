const express = require("express")
const app = express()
require("./db/conn")
const User = require("./models/user")
 
 const port = process.env.PORT || 8000;
app.use(express.json())

 app.post ("/user", (req,res)=>{
     console.log(req.body)
     const xyz = new User(req.body);
     xyz.save().then(()=>{
         res.status(201).send(xyz);
     }).catch((e)=>{res.send(e)})
 })
app.get("/user", async (req,res)=>{
try {const tata = await User.find()
res.send(tata)
} catch(e){console.log(e)}})

app.get("/user/:id", async (req,res)=>{

    const _id = req.params.id

    const data = await User.findById(_id)

    res.send(data)



}
    
    
    )

app.put("/user/:id", async(req, res)=>{

    const _id = req.params.id

    const data = await User.findByIdAndUpdate(_id, req.body, {new:true})

    res.send(data)


})
app.delete("/user/:id", async(req, res)=>{

    const _id = req.params.id

    const deleet = await User.findByIdAndDelete(req.params.id)

    res.send(deleet)


})


 app.listen (port,()=>{
     console.log(`connection is setup at ${port}`)
 })