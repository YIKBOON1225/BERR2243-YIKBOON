const { MongoClient } = require('mongodb');
async function main()
{
    const start = Date.now();
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);
    try 
    {
        await client.connect();

        const duration  = Date.now() - start;
        console.log(`Connected to MongoDB! (${duration} ms)`);


        const db = client.db("testDB");
        const collection = db.collection("users");
        // Insert a document
        await collection.insertOne({ name: "YIK BOON", age: 22 });
        console.log("Document inserted!");
        // Query the document
        const result = await collection.findOne({ name: "YIK BOON" });
        console.log("Query result:", result);
} 
    catch (err) 
    {
        console.error("Error:", err);
    } 
    finally 
    {
        await client.close();
    }
}
main();