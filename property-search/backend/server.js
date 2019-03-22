const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");

const app = express();
const PORT = 4000;
const password = fs.readFileSync("password.txt", "utf8");
const uri = `mongodb+srv://mkrul:${password}@cluster0-uadok.mongodb.net/test?retryWrites=true`; 

app.use(cors());
app.use(bodyParser.json());

const client = MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  console.log("MongoDB connection established!");
  client.close();
});

app.listen(PORT, function() {
  console.log(`Server is running on port ${PORT}`);
});
