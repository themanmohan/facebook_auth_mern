const mongoose =require("mongoose")
const config=require("config")
const db = config.get("CONNECTION_URL")

//making database connection
const dbConnection=async()=>{
    try {
      await  mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true })
        console.log("connected")
    } catch (error) {
        console.log(error)
    }

}


module.exports=dbConnection