import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import DataRoute from "./routes/DataRoute.js"

const app=express();
app.use(cors());
app.use(express.json());
app.use(DataRoute)
mongoose.connect("mongodb+srv://todoadmin:crc8X5B17gjDpjpt@todocluster.khska.mongodb.net/todolistDatabase",
 {
     useNewUrlParser: true,
     useUnifiedTopology:true
});




app.listen(5000,()=>console.log("App is running at port 5000"))
