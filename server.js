
const express = require('express');
const app = express();
const PORT = 3000;

// Request logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Route 1: Welcome text
app.get('/', (req, res) => {
    res.status(200).send(
        'Welcome to the Backend Development Fundamentals Lab 1 Server!'
    );
});

// Route 2: About JSON data
app.get('/about', (req, res) => {
    res.status(200).json({
        name: "K.Praharsha",
        registrationNumber: "5067",
        section: "II"
    });
});

// Route 3: Current Time JSON
app.get('/time', (req, res) => {
    res.status(200).json({
        currentTime: new Date().toISOString()
    });
});

// 404 Error Handler
app.use((req, res) => {
    res.status(404).json({
        error: "Not Found",
        message: "This route does not exist."
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});