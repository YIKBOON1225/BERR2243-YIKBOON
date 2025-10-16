const { MongoClient } = require('mongodb');

const drivers = 
[
    {
        name: "John Doe",
        vehicleType: "Sedan",
        isAvailable: true,
        rating: 4.8
    },
    {
        name: "Alice Smith",
        vehicleType: "SUV",
        isAvailable: false,
        rating: 4.5
    }
];

// show the data in the console
console.log(drivers);

// TODO: show the all the drivers name in the console
console.log("Driver names:");
drivers.forEach(driver => console.log(driver.name));

// TODO: add additional driver to the drivers array
drivers.push({
  name: "YIK BOON",
  vehicleType: "SUV",
  isAvailable: true,
  rating: 4.7
});

// show the data in the console
console.log(drivers);

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