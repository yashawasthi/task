import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import DataRoute from "./routes/DataRoute.js"

const app=express();
app.use(cors());
app.use(express.json());
app.use(DataRoute)
mongoose.connect("mongodb://localhost:27017/todolist",
 {
     useNewUrlParser: true,
     useUnifiedTopology:true
});




app.listen(5000,()=>console.log("App is running at port 5000"))
