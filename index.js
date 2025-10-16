const { MongoClient } = require('mongodb');

const driver = 
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
console.log(driver);

// TODO: show the all the drivers name in the console
console.log("Driver names:");
driver.forEach(driver => console.log(driver.name));

// TODO: add additional driver to the drivers array
driver.push({
  name: "YIK BOON",
  vehicleType: "SUV",
  isAvailable: true,
  rating: 4.7
});

// show the data in the console
console.log(driver);

async function main()
{
    //show time operation
    //const start = Date.now();

    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);
    try 
    {
        await client.connect();

        //show time operation
        //const duration  = Date.now() - start;
        //console.log(`Connected to MongoDB! (${duration} ms)`);


        const db = client.db("testDB");
        const drivercollection = db.collection("driver");
        // Insert a document
        
    
        const result = await drivercollection.insertMany(driver);
        console.log(`New driver created with result: ${result}`);
        
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