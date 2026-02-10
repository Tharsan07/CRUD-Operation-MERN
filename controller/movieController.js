import movieModel from "./models/movieModel.js";


export const moviePost = async (req, res) => {

// Schema -> id,title,description
// Validation of user data



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
    return res.status(400).json({Message:error.Message});
    
}
  
};

export const movieGet = (req, res) => {
  res.send("Get all the movies");
};

export const movieUpdate = (req, res) => {
  res.send("Update a movie");
};

export const movieDelete = (req, res) => {
  res.send("Delete a movie");
};
