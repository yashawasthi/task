import mongoose from "mongoose"

const Data=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    completed:{
        type:String,
        required:true
    }
});

export default mongoose.model("Data",Data)