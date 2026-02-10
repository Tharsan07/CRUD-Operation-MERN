import mongoose from "mongoose"

const connectDb= async()=>{
    try {
        await mongoose.connect('mongodb+srv://tharsantharsan05819_db_user:ahUevfClDy2Tto1Z@moviesapi.9hej3rw.mongodb.net/?appName=MoviesAPI');
        console.log("MongoDB connected sucessfully");
        
        
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
    

}

export default connectDb;