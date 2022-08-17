import express from 'express';
import {getProducts} from '../controllers/Product.controller'

const router = express.Router();

router.get('/getProducts', (_req,res) =>{
    res.send(getProducts());
})

export = router;