const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://econ:econecon@cluster0.by1nhoh.mongodb.net/data?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Import routes
const itemsRouter = require('./routes/items');
app.use('/api/items', itemsRouter);
// Import routes
const usersRouter = require('./routes/topUser');
app.use('/api/users', usersRouter);

const auth = require('./Auth/auth');
app.use('/api', auth);

const verify = require('./Auth/verifytoken');
app.use('/api/verifyToken', verify);

const UploadNID = require('./Auth/nidupload')
app.use('/api/uploadNID', UploadNID);

const rentHistory = require('./routes/rent');
app.use('/api/rent-history',rentHistory);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
