import express from "express";

import { movieRead,movieGet,movieUpdate,movieDelete} from "../controller/movieController.js";

const router = express.Router();

//C-Craeting a movie

router.post('/',movieRead);


//R-Reading a movie
router.get('/',movieGet);


//U-Updating a movie
router.put('/:id',movieUpdate);


//D-Deleting a movie

router.delete('/:id',movieDelete);

export default router;