const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const app = express();

app.use(express.json());
app.use(cors());

const connection = MongoClient.connect("mongodb+srv://m220student:m220password@mflix.lsht2.mongodb.net/test", {
    useNewUrlParser: true,
});


app.get("/", (req, res) => {
    res.json({ message: "Hello" });
});

app.get("/airbnb", async (req, res) => {
    const client = await connection;
    const db = client.db("sample_basic");
    const airbnbs = await db.collection('basic_collection').find({}).toArray();
    res.json({ airbnbs });
});


app.post("/airbnb", async (req, res) => {

    const client = await connection;
    const db = client.db("sample_basic");
    const airbnbs = await db.collection('basic_collection').insertOne({
        text: req.body.text,
    });
    res.json({ airbnbs });

});



app.listen(1337);