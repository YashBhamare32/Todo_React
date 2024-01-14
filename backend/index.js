const express = require("express");
const cors = require("cors");
const app = express();
const { create_todo, update_todo } = require("./types")
const { db_todo } = require("./db")

app.use(express.json());
app.use(cors());

app.post("/todos",async (req,res)=>{
    const create_payload = req.body;
    const parsed_payload = create_todo.safeParse(create_payload);
    if(!parsed_payload.success){
        res.status(411).json({
            msg:"Wrong inputs"
        })
        return;
    } 
    //put it in mongoDb
    await db_todo.create({
        title:create_payload.title,
        description:create_payload.description,
        completed:false
    })
    res.json({
        msg:"Todo created"
    })
})

app.get("/todos" , async (req,res)=>{
    const response = await db_todo.find({});
    res.json({
        todos:response
    })
})

app.put("/todos" , async (req,res)=>{
    const create_payload = req.body;
    const parsed_payload = update_todo.safeParse(create_payload);
    if(!parsed_payload.success){
        res.status(411).json({
            msg:"Wrong inputs"
        })
        return;
    } 
    //update in mongodb
    await db_todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Marked as completed"
    })
})

app.listen(3000 , ()=>{
    console.log("Example app listening on port 3000");
})