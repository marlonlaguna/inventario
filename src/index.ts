import express from 'express'
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