import express from "express";

const router = express.Router();

//C-Craeting a movie

router.post('/',(req,res)=>{
    res.send("Post a movies");
})
//R-Reading a movie
router.get('/',(req,res)=>{
    res.send("Get all the movies");
})
//U-Updating a movie
router.put('/:id',(req,res)=>{
    res.send("Update a movie");
})
//D-Deleting a movie

router.delete('/:id',(req,res)=>{
    res.send("Delete a movie");
})

export default router;