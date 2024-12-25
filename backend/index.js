import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/',(re,res)=>{
    res.send("hello world");
})

app.listen(PORT, ()=> {
    console.log(`server is running on http://localhost:${PORT}`);
})