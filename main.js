import express from "express";
import movieRoutes from "./routes/movieRoute.js";

const app = express();
const PORT=3000;

app.get('/',(req,res)=>{
    res.json({msg:" Server Started! "});
})

//CRUD API Funtionality for Movie
//API are written in routes/movieRoute.js
//Routes are handled from middleware

app.use('/movies',movieRoutes);



app.listen(PORT,()=>{
   console.log(`Server is running on http://localhost:${PORT}`);
});

//DRY principle 