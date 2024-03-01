const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const dbURL = `mongodb+srv://rakeshkaushik004:rakesh_707@cluster0.l5n7leq.mongodb.net/blackcoffertask?retryWrites=true&w=majority&appName=Cluster0`
const connectionPrams = {
    useNewUrlParser: true,
}

mongoose.connect(dbURL, connectionPrams).then(()=> {
    console.log('DB connected');
}).catch((e)=>{console.log("Error: ", e)})

const listener = app.listen(8080, ()=>{
    console.log("listening on port ", listener.address().port);
})


const schema = new mongoose.Schema({
    _id: Object,
    end_year: String,
    intensity: Number,
    sector:String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: String,
    published: String,
    country: String, 
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number
}, {versionKey: false});

const blackcoffer = mongoose.model("blackcoffer", schema);

app.get("/fetchall", async (req, res)=>{
    const Item = await blackcoffer.find();    
    console.log(Item);
    return Item
    // then(function(Item){
    //     console.log(Item);
    //     res.send(JSON.stringify(Item));
    // })
    // const item = blackcoffer.find(function(err,val){
    //     if(err){
    //         console.log(err)
    //     }else{
    //         console.log(res.json(val))
    //     }
    // })
})

// const data = async()=>{
//     const response = await fetch('https://localhost:3000/fetchall').then(res=>console.log(res))
// }

// data();