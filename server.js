const express = require('express'); 
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient; 
const app = express();


const connection = MongoClient.connect("mongodb+srv://m220student:m220password@mflix.lsht2.mongodb.net/test", { 
    useNewUrlParser: true,
 });


app.get("/" ,(req, res) =>{
    res.json({ message: "Hello" });
});

app.get("/api/airbnb" , async ( req , res) =>{
    const client = await connection;
    const db = client.db("sample_basic");
    const airbnb = await db.collection('basic_collection').find({}).limit(20).toArray();

    res.json({ airbnb });
});


app.post("/api/airbnb" , async ( req , res) =>{
    try {
        const client = await connection;
    const db = client.db("sample_basic");
    const airbnb = await db.collection('basic_collection').insertOne({
        text: req.body.text
    });

    res.json({ airbnb });
    } catch (error) {
        
    }
    
});



app.listen(1337);