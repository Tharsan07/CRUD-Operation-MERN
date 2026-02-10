export const moviePost=(req,res)=>{
    //Add a new movie
//id,title.description
// res.send("Post a movies");
    console.log(req.body);

return res.send(req.body)
    
};

export const movieGet = (req,res)=>{
    res.send("Get all the movies");
}

export const movieUpdate =(req,res)=>{


    res.send("Update a movie");
}

export const movieDelete = (req,res)=>{
    res.send("Delete a movie");
}