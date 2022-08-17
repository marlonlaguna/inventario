import express from 'express';
import productRoute from './routes/Product.route';
const app = express()
app.use(express.json())

const PORT = 3000;

app.get('/ping', (_req,res) =>{
    console.log('someone pinged here!!' + new Date().toLocaleDateString());
    res.send('pong');
})

app.listen(PORT, () =>{
    console.log('server runing on port ' + PORT);
})

app.use('/products',productRoute);