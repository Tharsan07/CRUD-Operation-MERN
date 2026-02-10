import { model, Schema } from "mongoose";


//To create an schema for our movie DB
const movieSchema = new Schema({
    title:String,
    description:String
})

//To create an model of our movieDB

const movieModel=model('Movie',movieSchema)

export default movieModel;