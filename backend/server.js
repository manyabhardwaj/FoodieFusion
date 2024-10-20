const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Dummy data for demonstration (Replace with your MongoDB fetch logic)
const dishes = [
    { id: 1, name: 'Pasta' },
    { id: 2, name: 'Pizza' },
];

// Define your API route here
app.get('/api/dishes', (req, res) => {
    res.json(dishes);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
