const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://mukundbondre41:MfMYIaotcEOSdF3I@futureskills-cluster.ro8sy.mongodb.net/?retryWrites=true&w=majority&appName=futureSkills-cluster"

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err) {
      console.error('MongoDB connection error:', err);
      process.exit(1);
    }
    console.log('MongoDB connected');
  });

  app.get('/api/items', async (req, res) => {
    try {
      const db = client.db('futureSkills-database');
      const collection = db.collection('futureSkills-collection');
      const items = await collection.find().toArray();
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });