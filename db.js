const mongoose =require("mongoose")


const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.mongo_url)
        console.log("Mongodb server is connected")
    }catch(err){
        console.log(`Error in connection: ${err.message}`)
    }
}

module.exports =connectDB;

