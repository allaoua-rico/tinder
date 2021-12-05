


const express = require('express');
const Card = require("./model/dbCards")
const cors = require("cors");
const path  = require("path")




if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const mongoose = require('mongoose');
const dbCards = require('./model/dbCards');
const app= express();
const port= process.env.PORT || 8001



app.use(express.json());
app.use(cors());

// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'), function(err) {
//         if (err) {
//           res.status(500).send(err)
//         }
//       });
    
// });
// }

app.get('/', (req,res)=>{
        res.send('hello');})

app.post('/tinder/card', (req,res)=>{
    const dbCard= req.body;

    Card.create(dbCard, (err,data)=>{
        if(err) res.status(500).send(err);
        else res.status(201).send(data);
    })
})
app.get('/tinder/card', (req,res)=>{

    Card.find((err,data)=>{
        if(err) res.status(500).send(err);
        else res.status(200).send(data);
    })
})


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
app.listen(port,()=> console.log(`listening on port: ${port}`));