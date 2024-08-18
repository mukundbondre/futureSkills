const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://mukundbondre41:MfMYIaotcEOSdF3I@futureskills-cluster.ro8sy.mongodb.net/?retryWrites=true&w=majority&appName=futureSkills-cluster"

const client = new MongoClient(uri);

client.connect(err => {
  if (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
  console.log('MongoDB connected');
});

app.get("/ping", async (req, res) => {
  try {
    const db = client.db('futureSkills-database');
    const collection = db.collection('futureSkills-collection');
    const items = await collection.find().toArray();
    if(items){
      res.send("database connect successfully");
    }else{
      res.send("database is not connected");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

app.post("/cards", async (req, res) => {
  try {
    const db = client.db('futureSkills-database');
    const collection = db.collection('futureSkills-collection');
    const user = req.body;
    const result = collection.insertOne(user);
    console.log(result);
    res.send(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

app.get('/cards', async (req, res) => {
  try {
    const db = client.db('futureSkills-database');
    const collection = db.collection('futureSkills-collection');
    const items = await collection.find().toArray();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/cards/:title', async (req, res) => {
  try {
    const title = req.params.title;
    console.log(title);
    const db = client.db('futureSkills-database');
    const collection = db.collection('futureSkills-collection');
    const items = await collection.find().toArray();
    console.log(items);
    const findCard = items.find(e => e.title == title);
    if(!findCard) return res.sendStatus(404);
    return res.send(findCard)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});