import { model, Schema } from "mongoose";



//To create an schema for our movie DB
//To validate an data before passing
const movieSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        unique:false
    }
})

//To create an model of our movieDB

const movieModel=model('Movie',movieSchema)

export default movieModel;