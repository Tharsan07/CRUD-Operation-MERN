import express from "express";

import {movieDelete,movieGet,moviePost,movieUpdate,movieDetail} from '../controller/movieController.js';

const router = express.Router();

//C-Craeting a movie

router.post('/',moviePost);




//R-Reading a movie
router.get('/',movieGet);

router.get('/:id',movieDetail);


//U-Updating a movie
router.put('/:id',movieUpdate);


//D-Deleting a movie

router.delete('/:id',movieDelete);

export default router;