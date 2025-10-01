require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');
const errorHandler = require('./middleware/errorHandler');


const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Connect DB
connectDB();


// Routes
app.use('/api/recipes', recipeRoutes);


// Serve a tiny HTML view at root (satisfies 'views' folder requirement)
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


// Error handler (should be after routes)
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));