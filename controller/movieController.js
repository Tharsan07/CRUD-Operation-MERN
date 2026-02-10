import { json } from "express";
import movieModel from "./models/movieModel.js";


export const moviePost = async (req, res) => {

// Schema -> id,title,description

//New data is being passed to mongoDB Schema
const newMovie = new movieModel({
    title:req.body.title,
    description:req.body.description
})


//Saving an new record within a dataBase with error handling

try {
    const movie= await newMovie.save();
    //code -> Sucess,New resources is being created
    return res.status(201).json(movie);
} catch (error) {
    //code -> Bad Request (invalid data)
    return res.status(400).json({message:error.message});
    
}
  
};

export const movieGet = async(req, res) => {
  try {
    const movies =await movieModel.find(); // fetching all the movie
    res.json(movies);
    
  } catch (error) {
    res.status(500).json({message:error.message})
  }
};

export const movieUpdate = async (req, res) => {

  try {
     const update=await movieModel.findOneAndUpdate(
    {_id:req.params.id},
    {
      title:req.body.title,
      description:req.body.description
    },
    {
       returnDocument: "after" 
        }
  )
  res.status(200).json(update);
}
    
   catch (error) {
    res.status(500).json({message:error.message});
  }

}

export const movieDelete = async (req, res) => {
  const movieId=req.params.id;

  try {
    await movieModel.deleteOne({_id:movieId});
    res.json("Movie has been deleted")
  } catch (error) {
    res.status(500).json({message:error.message});
  }
};

export const movieDetail =async(req,res)=>{
   try {
    const movie= await movieModel.findById(req.params.id);
    if(movie==null){
       res.status(500).json({message:"Movies not found,invalid data"})
    }
    else{
      res.json(movie);
    }
    
  } catch (error) {
   res.status(500).json({message:error.message});
  }
}