const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log(" Connected to MongoDB!");
  } catch (err) {
    console.error(" Connection failed:", err);
  } finally {
    await client.close();
  }
}

run();
//mongod --dbpath /data/db --bind_ip 127.0.0.1 --port 27017
