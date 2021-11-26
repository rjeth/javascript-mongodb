const express = require('express'); 
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient; 
const app = express();





app.get("/" ,(req, res) =>{
    res.json({ message: "Hello" });
});

app.get("/api/airbnb" , async ( req , res) =>{
    // const client = await MongoClient.connect("mongodb://localhost:27017", { 
    //     useNewUrlParser: true,
    // });

    // const db = client.db("sample_airbnb");
    // const airbnb = await db.collection('listingsAndReviews').find({}).toArray();

    // res.json({ airbnb });
    res.json({ message: "Hello" });
});

app.listen(1337);