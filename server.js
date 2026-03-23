const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jsonstore')
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.log('❌ MongoDB error:', err));

// Schema that accepts any JSON structure
const DataSchema = new mongoose.Schema({
    data: { type: mongoose.Schema.Types.Mixed, required: true },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

const DataModel = mongoose.model('Data', DataSchema);

// ============ ONLY 3 APIs ============

// 1. POST API - Save any JSON data
app.post('/api/data', async (req, res) => {
    try {
        const jsonData = req.body;

        if (!jsonData || Object.keys(jsonData).length === 0) {
            return res.status(400).json({ 
                error: 'No data provided. Please send a valid JSON object.' 
            });
        }

        const newData = new DataModel({ data: jsonData });
        const savedData = await newData.save();

        res.status(201).json({ 
            id: savedData._id,
            customId: jsonData.id || null,
            data: savedData.data,
            message: 'Data saved successfully'
        });

    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ 
            error: 'Internal server error',
            details: error.message 
        });
    }
});

// 2. GET API - Get all data
app.get('/api/data', async (req, res) => {
    try {
        const allData = await DataModel.find({}).sort({ createdAt: -1 });
        res.json(allData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ 
            error: 'Internal server error',
            details: error.message 
        });
    }
});

// 3. GET by ID API - Get data by custom ID OR MongoDB ID
app.get('/api/data/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let dataEntry = null;

        // First, try to find by custom ID (the "id" field in your JSON data)
        dataEntry = await DataModel.findOne({ 'data.id': id });
        
        // If not found by custom ID, try to find by MongoDB _id
        if (!dataEntry && mongoose.Types.ObjectId.isValid(id)) {
            dataEntry = await DataModel.findById(id);
        }

        if (!dataEntry) {
            return res.status(404).json({ 
                error: 'Data not found with the provided ID.' 
            });
        }

        res.json(dataEntry);

    } catch (error) {
        console.error('Error fetching data by ID:', error);
        res.status(500).json({ 
            error: 'Internal server error',
            details: error.message 
        });
    }
});

// ============ SERVER STARTUP ============

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`\n✅ 3 APIs available:`);
    console.log(`   1. POST   http://localhost:${PORT}/api/data     - Save any JSON data`);
    console.log(`   2. GET    http://localhost:${PORT}/api/data     - Get all data`);
    console.log(`   3. GET    http://localhost:${PORT}/api/data/:id - Get data by custom ID or MongoDB ID`);
});