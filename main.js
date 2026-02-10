import express from "express";
import movieRoutes from "./routes/movieRoute.js";
import connectDb from "./lib/db.js";

const app = express();
const PORT=3000;

//MongoDB Connection
connectDb();

//Middlewares

//For understanding of json data by the browser
app.use(express.json());

//For handling an urlencoded data
app.use(express.urlencoded({extended:true}))


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