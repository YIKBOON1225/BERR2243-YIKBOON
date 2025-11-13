const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const port = 3000;
const app = express();

app.use(express.json());
let db;

async function connectToMongoDB() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
        db = client.db("testDB");
    } catch (err) {
        console.error("Error:", err);
    }
}
connectToMongoDB();

app.listen(port, () =>console.log(`🚀 Server running at http://localhost:${port}`));

/* --- CRUD endpoints for users --- */


// Create user account
app.post("/users", async (req, res) => 
{
    try 
    {
        const result = await db.collection("users").insertOne(req.body);
        res.status(201).json({ id: result.insertedId });
    } 
    catch 
    {
        res.status(400).json({ error: "Invalid user data" });
    }
});

// Create driver account
app.post("/drivers", async (req, res) => 
{
    try 
    {
        const result = await db.collection("drivers").insertOne(req.body);
        res.status(201).json({ id: result.insertedId });
    } 
    catch 
    {
        res.status(400).json({ error: "Invalid driver data" });
    }
});

// Admin login
app.post("/admins", async (req, res) => 
{
    const { username, password } = req.body;
    const admin = await db.collection("admins").findOne({ username, password });
    if (admin) res.status(200).json({ message: "Admin login success" });
    else res.status(401).json({ error: "Unauthorized" });
});

// Driver login
app.post("/auth/driver/login", async (req, res) => 
{
    const { email, password } = req.body;
    const driver = await db.collection("drivers").findOne({ email, password });
    if (driver) res.status(200).json(driver);
    else res.status(401).json({ error: "Can't find account" });
});

// User login
app.post("/auth/user/login", async (req, res) => 
{
    const { email, password } = req.body;
    const user = await db.collection("users").findOne({ email, password });
    if (user) res.status(200).json(user);
    else res.status(401).json({ error: "Can't find account" });
});

// Update profile (user or driver)
app.patch(["/users/:id", "/drivers/:id"], async (req, res) => 
{
    const collection = req.path.includes("drivers") ? "drivers" : "users";
    const result = await db.collection(collection).updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
    );
    if (!result.modifiedCount)
        return res.status(404).json({ error: "Profile not found" });
    res.status(200).json({ updated: result.modifiedCount });
});

// Update driver status
app.patch("/drivers/:id/status", async (req, res) => 
{
    const result = await db.collection("drivers").updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { status: req.body.status } }
    );
    if (!result.modifiedCount)
        return res.status(404).json({ error: "Driver not found" });
    res.status(200).json({ updated: result.modifiedCount });
});

// View all rides
app.get("/rides", async (req, res) => 
{
    const rides = await db.collection("rides").find().toArray();
    if (rides.length === 0)
        return res.status(404).json({ error: "No rides found" });
    res.status(200).json(rides);
});

// View passenger(all user)
app.get('/users', async (req, res) => {
    try {
        const users = await db.collection('users').find().toArray();
        res.status(200).json(users);
    } catch (err) {
        res.status(404).json({ error: "Not Found" });
    }
});

// View driver(all driver)
app.get('/drivers', async (req, res) => {
    try {
        const drivers = await db.collection('drivers').find().toArray();
        res.status(200).json(drivers);
    } catch (err) {
        res.status(404).json({ error: "Not Found" });
    }
});

// View profile
app.get(["/users/:id"], async (req, res) => 
{
    const user = await db.collection("users").findOne({ _id: new ObjectId(req.params.id) });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
});

// View earnings
app.get("/drivers/:id/earn", async (req, res) => 
{
    const driver = await db.collection("drivers").findOne({ _id: new ObjectId(req.params.id) });
    if (!driver) return res.status(404).json({ error: "Driver not found" });
    res.status(200).json({ earnings: driver.earnings || 0 });
});

// View ride details
app.get("/rides/:id", async (req, res) => 
{
    const ride = await db.collection("rides").findOne({ _id: new ObjectId(req.params.id) });
    if (!ride) return res.status(404).json({ error: "Ride not found" });
    res.status(200).json(ride);
});

// Delete account
app.delete("/users/:id", async (req, res) => 
{
    const result = await db.collection("users").deleteOne({ _id: new ObjectId(req.params.id) });
    if (!result.deletedCount) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ deleted: result.deletedCount });
});

// Block user (for demo, pretend block)
app.delete("/users/:id/block", async (req, res) => 
{
    const result = await db.collection("users").updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { blocked: true } }
    );
    if (!result.modifiedCount) return res.status(403).json({ error: "Forbidden" });
    res.status(204).send();
});

// Admin logout
app.delete("/admins/:id", (req, res) => 
{
    const id = req.params.id;
    if (id) res.status(200).json({ message: "Admin logged out" });
    else res.status(401).json({ error: "Unauthorized" });
});