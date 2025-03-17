const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 3000;

// MongoDB connection details
const uri = "mongodb+srv://TAJ:T7Dr9Q70tUgnen2e@cluster0.3y5sd.mongodb.net/";
const dbName = "worknix";
const collectionName = "overtime_requests";

// Middleware
app.use(express.json());
app.use(cors());
let db, overtimeRequests;

// Connect to MongoDB and initialize collections
async function initializeDatabase() {
    try {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        db = client.db(dbName);
        overtimeRequests = db.collection(collectionName);

        // Start server after successful DB connection
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit if database connection fails
    }
}

// Initialize Database
initializeDatabase();

// Routes

// GET: List all overtime requests
app.get('/overtime', async (req, res) => {
    try {
        const requests = await overtimeRequests.find().toArray();
        res.status(200).json(requests);
    } catch (err) {
        res.status(500).send("Error fetching overtime requests: " + err.message);
    }
});

// POST: Add a new overtime request
app.post('/overtime', async (req, res) => {
    try {
        const newRequest = { ...req.body, status: "pending" }; // Default status is pending
        const result = await overtimeRequests.insertOne(newRequest);
        res.status(201).send(`Overtime request added with ID: ${result.insertedId}`);
    } catch (err) {
        res.status(500).send("Error adding overtime request: " + err.message);
    }
});

// DELETE: Remove an overtime request by employee_id
app.delete('/overtime/:employee_id', async (req, res) => {
    try {
        const employeeId = req.params.employee_id;
        const result = await overtimeRequests.deleteOne({ employee_id: employeeId });
        res.status(200).send(`${result.deletedCount} document(s) deleted`);
    } catch (err) {
        res.status(500).send("Error deleting overtime request: " + err.message);
    }
});

// PATCH: Approve or Decline an overtime request
app.patch('/overtime/:employee_id', async (req, res) => {
    try {
        const employeeId = req.params.employee_id;
        const { status } = req.body; // Expecting { "status": "approved" } or { "status": "declined" }
        if (!status || (status !== "approved" && status !== "declined")) {
            return res.status(400).send("Invalid status. Use 'approved' or 'declined'.");
        }

        const result = await overtimeRequests.updateOne(
            { employee_id: employeeId },
            { $set: { status: status } }
        );

        res.status(200).send(`${result.modifiedCount} document(s) updated to ${status}`);
    } catch (err) {
        res.status(500).send("Error updating overtime request status: " + err.message);
    }
});